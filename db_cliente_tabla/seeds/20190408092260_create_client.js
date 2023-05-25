'use strict';

exports.seed = knex =>
	knex('tb_client')
		.del()
		.then(() =>
			knex('tb_client').insert([
				{
					id: 1, name: 'BRAYAN 1', age: 24,
				},
			]));
