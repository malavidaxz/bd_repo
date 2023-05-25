'use strict';

/* istanbul ignore next */
const bluebird = require('bluebird');
const redis = require('redis');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const client = null;

// if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
// 	client = redis.createClient({
// 		host: process.env.REDIS_HOST,
// 		port: process.env.REDIS_PORT,
// 	});
// 	client.on('error', (err) => {
// 		/* eslint-disable no-console */
// 		console.log(`Error Redis ${err}`);
// 	});
// }

async function authenticate(request, token) {
	// try {
	// 	let isValid = false;
	// 	const artifacts = {};
	// 	if (token) {
	// 		const currentKey = `${process.env.REDIS_DB}${token}`;
	// 		const data = await client.getAsync(currentKey);
	// 		let credentials = {};
	// 		if (data) {
	// 			isValid = true;
	// 			credentials = JSON.parse(data);
	// 			credentials.cms_companies_id = credentials.company_id;
	// 			credentials.token = token;
	// 		}
	// 		return { isValid, credentials, artifacts };
	// 	}
	// } catch (error) {
	// 	/* eslint-disable no-console */
	// 	console.log(`Error to validate token ${error}`);
	// }
	return {
		isValid: true,
		credentials: {
			cms_companies_id: 101,
			id: 1,
			sal_terminals_id: 1,
			com_subsidiaries_id: 1,
			company: {
				id: 501,
				company_code: '1234',
				companyId: 500,
			},
			countryCode: 'ECU',
			war_warehouses_id: 1,
			app: {
				code_app: 'mistore',
			},
			employee: {
				id: 1,
				email: 'estonoesreal@gmail.com',
				name: 'employee',
				lastname: 'test',
				company: {
					comCountryId: 1,
					country: {
						id: 1,
						countryCode: 'PER',
						currency: 'PEN',
						productsTaxes: {
							default: {
								code: '01',
								name: 'IGV',
								codeTable: 'TABLA17',
								codePercentage: '01',
							},
						},
					},
					commerce_code: 'mistore',
				},
				salPriceList: {
					id: 1,
				},
				customer: {
					id: 1,
				},
				subsidiary: {
					id: 1,
					commerces: [{ id: 13 }],
				},
			},
			scope: ['admin'],
			commerce: {
				id: 1,
				code: 'mistore',
				warehousesRelated: [1],
				settings: {
					limitHome: 3,
					limitShownHome: 2,
					salPriceListId: 72,
				},
			},
			country: {
				id: 1,
				countryCode: 'ECU',
				currency: 'USD',
				productsTaxes: {
					default: {
						code: '2',
						name: 'IVA',
						codeTable: 'TABLA17',
						codePercentage: '2',
					},
				},
			},
			configFilters: {
				subsidiaries: {
					subsidiaries: {
						values: [1, 2],
					},
				},
			},
			settings: {
				allowOrderStockNegative: true,
				stockNegative: true,
				orderMoveKardex: true,
				bankReconcilementForDay: 1,
				digitCorrelativeSale: 8,
				flagNotGenericNtc: false,
				autoDispatch: true,
				assignEmployee: true,
				useOrderCredits: true,
				domainCatalog: 'https://maki.la',
				flagGrouper: false,
			},
			subsidiary: {
				id: 1,
				warWarehousesId: 1,
				flagAdmin: 1,
				cashId: 1,
				name: 'Japi',
				lastname: 'Sale',
				urlLogo: 'asdasda',
				rzSocial: 'asdasd',
				sucursalName: '123123dfff',
				ruc: 'qweqweq123123123',
			},
		},
	};
}

module.exports = authenticate;
