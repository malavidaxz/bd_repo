'use strict';

const Boom = require('boom');
const TbClient = require('../../models/tbClient');

async function handler(request, h) {
	try {
		const data = request.payload;
		const respons = await TbClient.create(data);
		return h.response(respons).code(201);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
