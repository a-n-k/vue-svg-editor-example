<template lang="pug">
	fieldset
		legend coordinates
		div.field
			label.lbl
				span.inline cx
				input.ipt-small(
					type="text" data-type="int"
					:value="options.x"
				)
			label.lbl
				span.inline cy
				input.ipt-small(
					type="text" data-type="int"
					:value="options.y"
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
		div.field
			label.lbl
				span.inline width
				input.ipt-small(
					type="text" data-type="int"
					:value="options.width"
				)
			label.lbl
				span.inline height
				input.ipt-small(
					type="text" data-type="int"
					:value="options.height"
				)
</template>

<script>
	export default {
		name: 'form-rect',
		props: ['options']
	}
</script>
