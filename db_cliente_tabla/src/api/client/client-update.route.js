'use strict';

const Joi = require('joi');
const handler = require('./client-update.handler');

const route = {
	handler,
	method: 'PUT',
	options: {
		validate: {
			params: {
				id: Joi.number()
					.integer()
					.required()
					.description('Id  a actualizar')
					.example(1),
			},
			payload: {
				name: Joi.string().allow('', null),
				age: Joi.number().integer(),
			},
		},
	},
	path: '/services/clients/{id}',
};

module.exports = route;
