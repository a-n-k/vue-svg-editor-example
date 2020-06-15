<template lang="pug">
	div
		div
			div.field.inline
				label.lbl cx
					input.ipt(type="text" v-model.lazy.trim.number="options.cx" required)
			div.field.inline
				label.lbl cy
					input.ipt(type="text" v-model.lazy.trim.number="options.cy" required)
		div
			div.field.inline
				label.lbl rx
					input.ipt(type="text" v-model.lazy.trim.number="options.rx" required)
			div.field.inline
				label.lbl ry
					input.ipt(type="text" v-model.lazy.trim.number="options.ry" required)
		shared(:type="type" :options="options" )
</template>

<script>
	import Shared from './shared';

	export default {
		name: 'form-ellipse',
		props: ['type', 'options'],
		components: {Shared}
	}
</script>