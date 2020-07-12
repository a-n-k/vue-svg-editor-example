<template lang="pug">
	div
		div.field
			label.lbl
				span.inline value
				input.ipt-long(
					type="text" data-type="string"
					:value="options.value"
				)
		fieldset
			legend coordinates
			div.field
				label.lbl
					span.inline x
					input.ipt-small(
						type="text" data-type="int"
						:value="options.x"
					)
				label.lbl
					span.inline y
					input.ipt-small(
						type="text" data-type="int"
						:value="options.y"
					)
</template>

<script>
	export default {
		name: 'form-text',
		props: ['options']
	}
</script>