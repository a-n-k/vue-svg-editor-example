<template lang="pug">
	fieldset
		legend coordinates
		div.field
			label.lbl
				span.inline cx
				input.ipt-small(
					type="text" data-type="int"
					:value="options.cx"
				)
			label.lbl
				span.inline cy
				input.ipt-small(
					type="text" data-type="int"
					:value="options.cy"
				)
		div.field
			label.lbl
				span.inline rx
				input.ipt-small(
					type="text" data-type="int"
					:value="options.rx"
				)
			label.lbl
				span.inline ry
				input.ipt-small(
					type="text" data-type="int"
					:value="options.ry"
				)
</template>

<script>
	export default {
		name: 'form-ellipse',
		props: ['options']
	}
</script>