'use strict';

const test = require('tape');
const { createRouteTest } = require('../../shared/helperTest');
const helper = require('../../shared/helperTest');

let server = null;
helper.mockServer().then((serverResponse) => {
	server = serverResponse;
});

test('POST /clients creates a clients', async (assert) => {
	const url = '/reto/services/clients';
	const route = {
		method: 'POST',
		payload: {
			id: 2,
			name: 'Brayan',
			age: 1,
		},
		url,
	};

	const { statusCode } = await server.inject(createRouteTest(route));
	assert.plan(1);
	const actual = statusCode;
	const expected = 201;
	const message = `POST ${url} must return 201 status code`;
	assert.equal(actual, expected, message);

	assert.end();
});

test('GET /clients brings list of clients', async (assert) => {
	const url = '/reto/services/clients';
	const route = {
		method: 'GET',
		url,
	};

	assert.plan(2);
	const response = await server.inject(createRouteTest(route));

	const actual = response.statusCode;
	const expected = 200;
	const message = `GET ${url} must return 200 status code`;

	assert.equal(actual, expected, message);

	const actual2 = response.result.length;
	const expected2 = 2;
	const message2 = `GET ${url} must return 1 values`;

	assert.equal(actual2, expected2, message2);
	assert.end();
});

test('PUT /clients /{id} updates a clients', async (assert) => {
	const url = '/reto/services/clients/1';
	const route = {
		method: 'PUT',
		url,
		payload: {
			name: 'Brayan',
			age: 1,
		},
	};
	const response = await server.inject(createRouteTest(route));
	assert.plan(1);

	const actual = response.statusCode;
	const expected = 200;
	const message = `PATCH ${url} must return 200 status code`;

	assert.equal(actual, expected, message);

	assert.end();
});

test('GET /contact details/{id}', async (assert) => {
	const url = '/contact/1';
	const route = {
		method: 'GET',
		url,
	};

	const { statusCode } = await server.inject(createRouteTest(route));
	assert.plan(1);

	const actual = statusCode;
	const expected = 200;
	const message = `GET ${url} must return 200 status code`;

	assert.equal(actual, expected, message);

	assert.end();
});

// test('DELETE /contact/{id} deletes an contact', async (assert) => {
// 	const url = '/contact/1';
// 	const route = {
// 		method: 'DELETE',
// 		url,
// 	};
// 	assert.plan(1);
// 	const { statusCode } = await server.inject(createRouteTest(route));

// 	const actual = statusCode;
// 	const expected = 200;
// 	const message = `DELETE ${url} must return 200 status code`;

// 	assert.equal(actual, expected, message);

// 	assert.end();
// });
