<template lang="pug">
	div(v-if="figure")
		form
			div.field
				label.lbl index
					input.ipt(type="text" v-model.lazy.trim.number="figure.index" required)
			component(
				:is="componentName(figure.type)"
				:type="figure.type" :options="figure.options"
			)
</template>

<script>
	import FormCircle from './circle';
	import FormEllipse from './ellipse';
	import FormLine from './line';
	import FormRect from './rectangle';
	import FormText from './text';

	export default {
		name: "svg-forms",
		components: {
			FormCircle, FormEllipse, FormLine, FormRect, FormText
		},
		props: ['figure'],
		methods: {
			componentName(type) {
				return ['form', type].join('-');
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../base/style.scss";

	.field {
		padding: 0 10px;

		.lbl {
			color: navy;
			font-style: italic;
			font-size: 16px;
		}

		.ipt {
			border: $border;
			border-radius: $br-radius;
			width: 50px;
			text-align: center;
			margin: 10px;
			font-size: 16px;
		}

		.long {
			width: 150px;
		}
	}

	.inline {
		display: inline-block;
	}
</style>