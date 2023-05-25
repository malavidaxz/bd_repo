'use strict';

const { createRoute } = require('../shared/httpHelper');
const Joi = require('joi');
const handler = require('./client-delete.handler');

const documentation = {
	description: 'Crear un client',
	notes: [],
};

const route = {
	handler,
	method: 'DELETE',
	options: {
		validate: {
			params: {
				id: Joi.number()
					.integer()
					.positive(),
			},
		},
	},
	path: '/services/clients/{id}',
};

module.exports = createRoute(route, documentation);
