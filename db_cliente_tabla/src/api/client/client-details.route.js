'use strict';

const Joi = require('joi');
const handler = require('./client-details.handler');

const route = {
	handler,
	method: 'GET',
	options: {
		validate: {
			params: {
				id: Joi.number()
					.required()
					.integer(),
			},
		},
	},
	path: '/services/clients/{id}',
};

module.exports = route;
