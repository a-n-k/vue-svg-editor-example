<template lang="pug">
	div
		fill(v-if="fill" :options="fill")
		stroke(:options="stroke")
		font(v-if="font" :options="font")
</template>

<script>
	import Fill from './fill';
	import Stroke from './stroke';
	import Font from './font';

	export default {
		components: {Fill, Stroke, Font},
		props: ['options'],
		computed: {
			fill() {
				return this.options.fill;
			},
			stroke() {
				return this.options.stroke;
			},
			font() {
				return this.options.font;
			}
		}
	}
</script>
