/**
 * Creates predicate for find entity in Array
 * @param {String|Number} id
 * @param {String} [from] Property name
 * @returns {function(*): boolean}
 */
export function byId(id, from) {
	return function (item) {
		const itemId = from ? item[from].id : item.id;
		return itemId === id;
	}
}

/**
 * Creates predicate for sorting entities in Array
 * @param {String} propertyName
 * @param {Number} direction
 */
export function byNumberValue(propertyName, direction = 1) {
	return function (a, b) {
		const result = a[propertyName] - b[propertyName];
		return (direction > 0) ? result : result * -1;
	}
}