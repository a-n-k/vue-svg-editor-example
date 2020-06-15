export const base = {
	props: {
		options: {type: Object, required: true}
	},
	computed: {
		style() {
			const options = this.options,
					stroke = options.stroke,
					fill = options.fill,
					width = stroke.width,
					linecap = stroke.linecap,
					dasharray = stroke.dasharray,
					style = {};
			if (fill) {
				style.fill = fill
			}
			if (width) {
				style.stroke = stroke.color;
				style.strokeWidth = width;
				if (linecap !== 'butt') {
					style.strokeLinecap = linecap;
				}
				if (dasharray) {
					style.strokeDasharray = dasharray;
				}
			}
			return style;
		}
	}
};