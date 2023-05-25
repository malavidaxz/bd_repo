'use strict';

const configServer = require('./../api/server');

function fakeCredentials(data = { cms_companies_id: 101 }) {
	return data;
}

function mockServer() {
	return configServer;
}

function createRouteTest(otherProperties = {}) {
	const route = {
		credentials: fakeCredentials(),
		...otherProperties,
	};
	return route;
}

const methods = {
	createRouteTest,
	fakeCredentials,
	mockServer,
};

module.exports = methods;
