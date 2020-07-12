<template lang="pug">
	fieldset
		legend fill
		div.field
			label.lbl
				span.inline color
				input.ipt-long(
					type="text" name="color"
					:value="options.color"
					@change="onChange"
				)
		div.field
			label.lbl
				span.inline opacity
				input.ipt-small(
					type="text" name="opacity"
					:value="options.opacity"
					@change="onChange"
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
