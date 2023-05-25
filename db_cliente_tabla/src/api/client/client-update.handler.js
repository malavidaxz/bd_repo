'use strict';

const Boom = require('boom');
const MsContact = require('../../models/tbClient');

async function handler(request, h) {
	try {
		const data = request.payload;
		const updateContact = await MsContact.edit(request.params.id, data);
		return h.response(updateContact).code(200);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
