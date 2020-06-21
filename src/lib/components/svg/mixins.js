export const base = {
	props: {
		options: {type: Object, required: true}
	},
	computed: {
		style() {
			const options = this.options,
					fill = options.fill,
					stroke = options.stroke,
					width = stroke.width,
					linecap = stroke.linecap,
					dasharray = stroke.dasharray,
					font = options.font,
					style = {};
			if (fill) {
				style.fill = fill
			}
			if (width) {
				style.stroke = stroke.color;
				style.strokeWidth = width;
				if (linecap && linecap !== 'butt') {
					style.strokeLinecap = linecap;
				}
				if (dasharray) {
					style.strokeDasharray = dasharray;
				}
			}
			if (font) {
				const family = font.family,
						size = font.size,
						weight = font.weight;
				if (family) {
					style.fontFamily = family;
				}
				if (size) {
					style.fontSize = size;
				}
				if (weight) {
					style.fontWeight = weight;
				}
			}
			return style;
		}
	}
};