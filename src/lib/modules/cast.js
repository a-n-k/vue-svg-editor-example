export default {
	int(value) {
		let numberValue = Number.parseInt(value);
		if (isNaN(numberValue)) numberValue = 0;
		return numberValue;
	},
	float(value) {
		let floatValue = Number.parseFloat(value);
		if (isNaN(floatValue)) floatValue = 0;
		return floatValue;
	},
	color(value) {
		// todo convert value to color
		return value;
	},
	string(value) {
		return value.trim();
	}
}