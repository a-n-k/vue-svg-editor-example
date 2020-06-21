<template lang="pug">
	svg(
		xmlns="http://www.w3.org/2000/svg"
		width="100%" height="100%"
		:viewBox="viewBox"
	)
		component(
			v-for="shape in shapes"
			:key="shape.id"
			:is="componentName(shape.type)"
			:options="shape.options"
		)
</template>

<script>
	import SvgCircle from './circle';
	import SvgEllipse from './ellipse';
	import SvgLine from './line';
	import SvgRect from './rectangle';
	import SvgText from './text';

	export default {
		name: "svg-canvas",
		components: {
			SvgCircle, SvgEllipse, SvgLine, SvgRect, SvgText
		},
		props: {
			size: {type: Object, required: true},
			shapes: {type: Array, required: true}
		},
		computed: {
			viewBox() {
				const size = this.size;
				return [0, 0, size.width || 0, size.height || 0].join(' ');
			}
		},
		methods: {
			componentName(type) {
				return ['svg', type].join('-');
			}
		}
	}
</script>