'use strict';

const { createRoute } = require('../shared/httpHelper');
const handler = require('./client-list.handler');

const documentation = {
	description: 'Retorna un listado de clientes',
	notes: [],
};

const route = {
	handler,
	method: 'GET',
	path: '/services/clients',
};

module.exports = createRoute(route, documentation);
