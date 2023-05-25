'use strict';

const pagiJapi = require('./shared/paginate');
const templatePlugin = require('./client/client.plugin');

const plugins = [
	{
		plugin: pagiJapi,
	},
	{
		plugin: templatePlugin,
		routes: {
			prefix: '/reto',
		},
	},
];

module.exports = plugins;
