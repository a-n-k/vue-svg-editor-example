export const base = {
	props: {
		options: {type: Object, required: true}
	},
	computed: {
		style() {
			const {fill, stroke, font} = this.options,
					width = stroke.width,
					linecap = stroke.linecap,
					dasharray = stroke.dasharray,
					style = {};
			if (fill) {
				style.fill = fill.color;
				style.fillOpacity = fill.opacity;
			}
			if (width) {
				style.stroke = stroke.color;
				style.strokeWidth = width;
				style.strokeOpacity = stroke.opacity;
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