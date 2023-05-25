'use strict';

const Joi = require('joi');
const handler = require('./client-create.handler');
const { createRoute } = require('../shared/httpHelper');

const documentation = {
	description: 'Crear un client',
	notes: [],
};

const route = {
	handler,
	method: 'POST',
	options: {
		pre: [],
		validate: {
			payload: {
				id: Joi.number().integer(),
				name: Joi.string().allow('', null),
				age: Joi.number().integer(),
			},
		},
	},
	path: '/services/clients',
};

module.exports = createRoute(route, documentation);
