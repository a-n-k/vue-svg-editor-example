<template lang="pug">
	fieldset
		legend coordinates
		div.field
			label.lbl
				span.inline x1
				input.ipt-small(
					type="text" data-type="int"
					name="x1" :value="options.x1"
					@change="onChange"
				)
			label.lbl
				span.inline y1
				input.ipt-small(
					type="text" data-type="int"
					name="y1" :value="options.y1"
					@change="onChange"
				)
		div.field
			label.lbl
				span.inline x2
				input.ipt-small(
					type="text" data-type="int"
					name="x2" :value="options.x2"
					@change="onChange"
				)
			label.lbl
				span.inline y2
				input.ipt-small(
					type="text" data-type="int"
					name="y2" :value="options.y2"
					@change="onChange"
				)
</template>

<script>
	import mixin from './mixin';

	export default {
		name: 'form-line',
		secName: '',
		mixins: [mixin]
	}
</script>