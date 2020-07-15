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
					type="text" data-type="int"
					name="cy" :value="options.cy"
					@change="onChange"
				)
		div.field
			label.lbl
				span.inline rx
				input.ipt-small(
					type="text" data-type="int"
					name="rx" :value="options.rx"
					@change="onChange"
				)
			label.lbl
				span.inline ry
				input.ipt-small(
					type="text" data-type="int"
					name="ry" :value="options.ry"
					@change="onChange"
				)
</template>

<script>
	import mixin from './mixin';

	export default {
		name: 'form-ellipse',
		secName: '',
		mixins: [mixin]
	}
</script>