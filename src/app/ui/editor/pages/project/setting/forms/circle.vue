<template lang="pug">
	div
		div.field.inline
			label.lbl cx
				input.ipt(type="text" v-model.lazy.trim.number="options.cx" required)
		div.field.inline
			label.lbl cy
				input.ipt(type="text" v-model.lazy.trim.number="options.cy" required)
		div.field
			label.lbl radius
				input.ipt(type="text" v-model.lazy.trim.number="options.r" required)
		shared(:type="type" :options="options" )
</template>

<script>
	import Shared from './shared';

	export default {
		name: "form-circle",
		props: ['type', 'options'],
		components: {Shared}
	}
</script>