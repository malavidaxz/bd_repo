'use strict';

exports.seed = knex =>
	knex('tb_client')
		.del()
		.then(() => knex('tb_client').del());
