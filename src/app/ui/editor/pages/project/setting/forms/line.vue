<template lang="pug">
	fieldset
		legend coordinates
		div.field
			label.lbl
				span.inline x1
				input.ipt-small(
					type="text" data-type="int"
					:value="options.x1"
				)
			label.lbl
				span.inline y1
				input.ipt-small(
					type="text" data-type="int"
					:value="options.y1"
				)
		div.field
			label.lbl
				span.inline x2
				input.ipt-small(
					type="text" data-type="int"
					:value="options.x2"
				)
			label.lbl
				span.inline y2
				input.ipt-small(
					type="text" data-type="int"
					:value="options.y2"
				)
</template>

<script>
	export default {
		name: 'form-line',
		props: ['options']
	}
</script>