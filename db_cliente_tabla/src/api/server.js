'use strict';

const Glue = require('glue');
const hapiStatusMonitor = require('hapijs-status-monitor');
const raven = require('hapi-raven');
const AuthBearer = require('hapi-auth-bearer-token');
const dbConfig = require('./../config/objection');
const validate = require('./authenticate-token');
const plugins = require('./plugins-register');

dbConfig.initConnection();

const options = {
	host: process.env.HOST,
	port: process.env.PORT,
	routes: {
		cors: {
			origin: ['*'],
			exposedHeaders: ['x-quantity', 'x-last-page'],
		},
	},
};

const manifest = {
	server: options,
	register: {
		plugins,
	},
};

module.exports = Glue.compose(manifest, {
	preRegister: async (server) => {
		if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
			const ravenOptions = {
				plugin: raven,
				options: {
					environment: process.env.NODE_ENV,
					dsn: process.env.SENTRY_DNS,
				},
			};
			const statusMonitor = {
				options: {
					path: '/',
					routeConfig: {
						auth: false,
					},
					title: 'Japi Notifications',
				},
				plugin: hapiStatusMonitor,
			};
			await server.register(AuthBearer);
			await server.register(ravenOptions);
			await server.register(statusMonitor);
			server.ext('onPreResponse', (request) => {
				server.plugins['hapi-raven'].client.setContext({
					user: request.auth.credentials,
				});
				if (request.response.isBoom && request.response.output.statusCode === 400) {
					server.plugins['hapi-raven'].client.captureException(request.response, {
						extra: {
							query: request.query,
							payload: request.payload,
							params: request.params,
							response: request.response,
						},
						level: 'warning',
						tags: {
							statusCode: 400,
						},
					});
				}
				return request.response;
			});
			server.auth.strategy('simple', 'bearer-access-token', {
				validate,
			});
			server.auth.default('simple');
		}
	},
});
