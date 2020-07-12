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
					type="text"  data-type="int"
					:value="options.cy"
				)
			label.lbl
				span.inline r
				input.ipt-small(
					type="text"  data-type="int"
					:value="options.r"
				)
</template>

<script>
	export default {
		name: "form-circle",
		props: ['options']
	}
</script>