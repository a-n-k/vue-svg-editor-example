function equal(a, b) {
	if (a === b) return true;

	if (a && b && typeof a == 'object' && typeof b == 'object') {
		if (a.constructor !== b.constructor) return false;

		let length, i, keys;

		if (Array.isArray(a)) {
			length = a.length;
			if (length !== b.length) return false;
			for (i = 0; i < length; i++) {
				if (!equal(a[i], b[i])) return false;
			}
			return true;
		}

		keys = Object.keys(a);
		length = keys.length;
		if (length !== Object.keys(b).length) return false;

		for (i = 0; i < length; i++) {
			if (!b.hasOwnProperty(keys[i])) return false;
		}

		let key;
		for (i = 0; i < length; i++) {
			key = keys[i];
			if (!equal(a[key], b[key])) return false;
		}

		return true;
	}

	// true if both NaN, false otherwise
	return a !== a && b !== b;
}

function resetValues(target, source) {
	if (!(target && source)) return;

	if (Array.isArray(source)) {
		source.forEach(((val, i) => {
			resetValues(target[i], val);
		}));
	}

	Object.keys(source).forEach(function (key) {
		if (!target.hasOwnProperty(key)) {
			throw new Error('target has not own property - ' + key);
		}

		let value = source[key];
		if (Array.isArray(value) || typeof value === 'object') {
			resetValues(target[key], value);
		} else {
			target[key] = value;
		}
	});
}

export default {
	/**
	 * @param {Object|Array} source
	 * @returns {Object|Array}
	 */
	clone(source) {
		return JSON.parse(JSON.stringify(source));
	},

	/**
	 * Resets properties value from source to target
	 *
	 * @param {Object|Array} target
	 * @param {Object|Array} source
	 */
	resetValues(target, source) {
		resetValues(target, source);
	},

	/**
	 * @param {Object|Array} a
	 * @param {Object|Array} b
	 * @returns {Boolean}
	 */
	equal(a, b) {
		return equal(a, b);
	}
}
