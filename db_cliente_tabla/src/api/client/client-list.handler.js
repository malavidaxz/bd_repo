'use strict';

const TbClient = require('../../models/tbClient');

async function handler(request) {
	try {
		const data = await TbClient.getAll(request.query);
		return data;
	} catch (error) {
		return error;
	}
}

module.exports = handler;
