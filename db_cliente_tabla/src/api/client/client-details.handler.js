'use strict';

const Boom = require('boom');
const tbClient = require('../../models/tbClient');

async function handler(request) {
	try {
		const data = await tbClient.getById(request.params.id);
		return data || Boom.badRequest('CLIENT_NOT_FOUND');
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
