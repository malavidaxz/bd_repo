'use strict';

function defaultFields() {
	const defaultProperties = {
		createdAt: {
			type: 'date',
		},
		deletedAt: {
			type: 'date',
			default: null,
		},
		flagActive: {
			type: 'boolean',
			default: true,
		},
		updatedAt: {
			type: 'date',
		},
	};
	return defaultProperties;
}

const methods = {
	defaultFields,
};

module.exports = methods;
