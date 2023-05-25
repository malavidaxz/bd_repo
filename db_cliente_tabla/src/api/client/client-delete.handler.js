'use strict';

const Boom = require('boom');
const TbClient = require('../../models/tbClient');

async function handler(request) {
	try {
		const { id } = request.params;
		const variableDelete = await TbClient.remove(id);
		return variableDelete || Boom.badRequest('CLIENT_NOT_FOUND');
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
