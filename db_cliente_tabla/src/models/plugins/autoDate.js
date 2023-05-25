'use strict';

const format = require('date-fns/format');

function autoDate(Model) {
	const autoDateClass = class extends Model {
		$beforeInsert(context) {
			const objPromise = super.$beforeInsert(context);
			return Promise.resolve(objPromise).then(() => {
				this.createdAt = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
				this.updatedAt = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
			});
		}

		$beforeUpdate(opt, context) {
			const objPromise = super.$beforeUpdate(opt, context);
			return Promise.resolve(objPromise).then(() => {
				this.updatedAt = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
			});
		}
	};

	return autoDateClass;
}

module.exports = autoDate;
