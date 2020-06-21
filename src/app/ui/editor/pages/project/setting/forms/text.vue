<template lang="pug">
	div
		div.field
			label.lbl value
				input.ipt.long(type="text" v-model.lazy.trim="options.value" required)
		div
			div.field.inline
				label.lbl x
					input.ipt(type="text" v-model.lazy.trim.number="options.x" required)
			div.field.inline
				label.lbl y
					input.ipt(type="text" v-model.lazy.trim.number="options.y" required)
		shared(:type="type" :options="options" )
</template>

<script>
	import Shared from './shared';

	export default {
		name: 'form-text',
		props: ['type', 'options'],
		components: {Shared}
	}
</script>