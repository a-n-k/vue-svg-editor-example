<template lang="pug">
	fieldset
		legend coordinates
		div.field
			label.lbl
				span.inline x
				input.ipt-small(
					type="text" data-type="int"
					name="x" :value="options.x"
					@change="onChange"
				)
			label.lbl
				span.inline y
				input.ipt-small(
					type="text" data-type="int"
					name="y" :value="options.y"
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
		div.field
			label.lbl
				span.inline width
				input.ipt-small(
					type="text" data-type="int"
					name="width" :value="options.width"
					@change="onChange"
				)
			label.lbl
				span.inline height
				input.ipt-small(
					type="text" data-type="int"
					name="height" :value="options.height"
					@change="onChange"
				)
</template>

<script>
	import mixin from './mixin';

	export default {
		name: 'form-rect',
		secName: '',
		mixins: [mixin]
	}
</script>
