<template lang="pug">
	fieldset
		legend coordinates
		div.field
			label.lbl
				span.inline cx
				input.ipt-small(
					type="text" data-type="int"
					name="cx" :value="options.cx"
					@change="onChange"
				)
			label.lbl
				span.inline cy
				input.ipt-small(
					type="text"  data-type="int"
					name="cy" :value="options.cy"
					@change="onChange"
				)
			label.lbl
				span.inline r
				input.ipt-small(
					type="text"  data-type="int"
					name="r" :value="options.r"
					@change="onChange"
				)
</template>

<script>
	import mixin from './mixin';

	export default {
		name: "form-circle",
		secName: '',
		mixins: [mixin]
	}
</script>