'use strict';

const helper = require('../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('tb_client', (table) => {
		table.increments().primary();
		table.text('name').nullable();
		table.integer('age').nullable();
		helper.defaultColumns(table, false);
	});

exports.down = knex =>
	knex.schema.dropTable('tb_client');
