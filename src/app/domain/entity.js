const WIDTH = 240, HEIGHT = 240;

export const project = {
	newest: {name: ''},
	modify(model) {
		return Object.assign({
			modified: Date.now(),
			size: {width: WIDTH, height: HEIGHT, unit: 'px'}
		}, model);
	}
};

const CIRCLE = 'circle', ELLIPSE = 'ellipse',
		LINE = 'line', RECTANGLE = 'rect', TEXT = 'text',
		fill = 'silver',
		stroke = {
			width: 2,
			color: 'black',
			dasharray: ''
		},
		font = {
			family: '',
			size: '24px',
			weight: ''
		};

export const shape = {
	types: [
		CIRCLE, ELLIPSE, LINE, RECTANGLE, TEXT
	],
	options: {
		[CIRCLE]: {
			cx: WIDTH / 2, cy: HEIGHT / 2, r: 20,
			fill, stroke
		},
		[ELLIPSE]: {
			cx: WIDTH / 2, cy: HEIGHT / 2,
			rx: 40, ry: 20,
			fill, stroke
		},
		[LINE]: {
			x1: WIDTH / 2, y1: HEIGHT / 2,
			x2: WIDTH, y2: HEIGHT / 2,
			// butt | round | square | inherit
			stroke: Object.assign(stroke, {linecap: 'butt'})
		},
		[RECTANGLE]: {
			x: 0, y: 0,
			rx: 0, ry: 0, // for round the corners of the rectangle
			width: WIDTH / 2, height: HEIGHT / 2,
			fill, stroke
		},
		[TEXT]: {
			value: 'T',
			x: 0, y: HEIGHT / 2,
			fill, stroke, font
		}
	},
	newest: {type: '', index: 0},
	modify(model, projectId) {
		return Object.assign({
			projectId: projectId,
			options: this.options[model.type]
		}, model);
	}
};