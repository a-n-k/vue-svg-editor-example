<template lang="pug">
	div
		div
			div.field.inline
				label.lbl cx
					input.ipt(type="text" v-model.lazy.trim.number="options.x" required)
			div.field.inline
				label.lbl cy
					input.ipt(type="text" v-model.lazy.trim.number="options.y" required)
		div
			div.field.inline
				label.lbl rx
					input.ipt(type="text" v-model.lazy.trim.number="options.rx" required)
			div.field.inline
				label.lbl ry
					input.ipt(type="text" v-model.lazy.trim.number="options.ry" required)
		div
			div.field.inline.size
				label.lbl width
					input.ipt(type="text" v-model.lazy.trim.number="options.width" required)
			div.field.inline.size
				label.lbl height
					input.ipt(type="text" v-model.lazy.trim.number="options.height" required)
		shared(:type="type" :options="options" )
</template>

<script>
	import Shared from './shared';

	export default {
		name: 'form-rect',
		props: ['type', 'options'],
		components: {Shared}
	}
</script>

<style lang="scss" scoped>
	.size {
		padding-right: 0;
	}
</style>