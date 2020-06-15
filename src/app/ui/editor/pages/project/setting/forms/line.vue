<template lang="pug">
	div
		div
			div.field.inline
				label.lbl x1
					input.ipt(type="text" v-model.lazy.trim.number="options.x1" required)
			div.field.inline
				label.lbl y1
					input.ipt(type="text" v-model.lazy.trim.number="options.y1" required)
		div
			div.field.inline
				label.lbl x2
					input.ipt(type="text" v-model.lazy.trim.number="options.x2" required)
			div.field.inline
				label.lbl y2
					input.ipt(type="text" v-model.lazy.trim.number="options.y2" required)
		shared(:type="type" :options="options" )
</template>

<script>
	import Shared from './shared';

	export default {
		name: 'form-line',
		props: ['type', 'options'],
		components: {Shared}
	}
</script>