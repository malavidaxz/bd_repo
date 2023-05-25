'use strict';

const Boom = require('boom');
const Variable = require('../../models/tbClient');

async function validCode(request, h) {
	try {
		const { code } = request.payload;
		if (code) {
			const variable = await Variable.getByCode(code);
			if (variable) {
				return Boom.badRequest('REPEATED_CODE');
			}
		}
		return h.response();
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

const methods = {
	validCode,
};

module.exports = methods;
