<template lang="pug">
	fieldset
		legend font
		div.field
			label.lbl
				span.inline family
				input.ipt-long(
					type="text" data-type="string"
					:value="options.family"
				)
		div.field
			label.lbl
				span.inline size
				input.ipt-small(
					type="text" data-type="int"
					:value="options.size"
				)
			label.lbl
				span.inline weight
				input.ipt-small(
					type="text" data-type="string"
					:value="options.weight"
				)
</template>

<script>
	export default {
		props: ['options'],
		methods: {
			onChange(event) {
				// todo
			}
		}
	}
</script>
