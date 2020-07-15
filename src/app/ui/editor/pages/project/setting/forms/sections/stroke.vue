<template lang="pug">
	fieldset
		legend stroke
		div.field
			label.lbl
				span.inline width
				input.ipt-small(
					type="text" data-type="int"
					name="width" :value="options.width"
					@change="onChange"
				)
			label.lbl(v-if="options.width")
				span.inline opacity
				input.ipt-small(
					type="text" data-type="float"
					name="opacity" :value="options.opacity"
					@change="onChange"
				)
		div(v-if="options.width")
			div.field
				label.lbl
					span.inline color
					input.ipt-long(
						type="text"  data-type="color"
						name="color" :value="options.color"
						@change="onChange"
					)
			div.field
				label.lbl
					span.inline dasharray
					input.ipt-long(
						type="text" data-type="string"
						name="dasharray" :value="options.dasharray"
						@change="onChange"
					)
			div.field(v-if="options.linecap")
				label.lbl
					span.inline linecap
					select.ipt-long(
						data-type="string"
						name="linecap" :value="options.linecap"
						@change="onChange"
					)
						option(value="butt") butt
						option(value="round") round
						option(value="square") square
						option(value="inherit") inherit
</template>

<script>
	import mixin from '../mixin';

	export default {
		secName: 'stroke',
		mixins: [mixin]
	}
</script>
