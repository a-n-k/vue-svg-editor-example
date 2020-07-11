export default {
	toInt(value) {
		let numberValue = Number.parseInt(value);
		if (isNaN(numberValue)) numberValue = 0;
		return numberValue;
	}
}