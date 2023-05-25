'use strict';

const clientCreateRoute = require('./client-create.route');
const clientListRoute = require('./client-list.route');
const clientUpdateRoute = require('./client-update.route');
const clientDetailsRoute = require('./client-details.route');
const clientDeleteRoute = require('./client-delete.route');

function register(server) {
	server.route(clientCreateRoute);
	server.route(clientListRoute);
	server.route(clientUpdateRoute);
	server.route(clientDetailsRoute);
	server.route(clientDeleteRoute);
}

const plugin = {
	name: 'reto',
	register,
	version: '1.0.0',
};

module.exports = plugin;
