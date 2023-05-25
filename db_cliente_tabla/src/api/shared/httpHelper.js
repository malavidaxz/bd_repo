'use strict';

const Joi = require('joi');
const mergeWith = require('lodash/mergeWith');
const { getCompanyId } = require('./pre');

function failAction(request, h, error) {
	const newError = error;
	newError.reformat();
	newError.output.payload.code = 'error_validation';
	return newError;
}

function createRoute(route, documentation) {
	const genericRoute = {
		options: {
			...documentation,
			pre: [
				{
					assign: 'companyId',
					method: getCompanyId,
				},
			],
			validate: {
				query: {
					limit: Joi.number()
						.integer()
						.positive()
						.default(10)
						.description('Filtro para la cantidad de registros a mostrar')
						.example(10),
					page: Joi.number()
						.integer()
						.positive()
						.min(1)
						.description('Número de página')
						.example(1),
					search: Joi.string()
						.description('Campo que permite filtrar el listado')
						.example('Valor a buscar'),
					startDate: Joi.any(),
					endDate: Joi.any(),
					sortDirection: Joi.string().description('Establece el ordenamiento ascendente o descendente'),
					sortField: Joi.string().description('Establece sobre qué campo sea realizará el ordenamiento'),
				},
				options: {
					abortEarly: process.env.NODE_ENV === 'production',
				},
				failAction,
			},
		},
	};
	const newRoute = mergeWith(genericRoute, route, (objValue, srcValue, key) => {
		if (key === 'pre') {
			if (Array.isArray(objValue)) {
				return objValue.concat(srcValue);
			}
		}
		return undefined;
	});
	return newRoute;
}

const methods = {
	createRoute,
	failAction,
};

module.exports = methods;
