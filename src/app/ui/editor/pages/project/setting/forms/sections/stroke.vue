<template lang="pug">
	fieldset
		legend stroke
		div.field
			label.lbl
				span.inline width
				input.ipt-small(
					type="text" data-type="int"
					:value="options.width"
				)
		div(v-if="options.width")
			div.field
				label.lbl
					span.inline color
					input.ipt-long(
						type="text"  data-type="color"
						:value="options.color"
					)
			div.field
				label.lbl
					span.inline opacity
					input.ipt-small(
						type="text" name="opacity"
						:value="options.opacity"
						@change="onChange"
					)
			div.field
				label.lbl
					span.inline dasharray
					input.ipt-long(type="text" :value="options.dasharray")
			div.field(v-if="options.linecap")
				label.lbl linecap
					select.ipt-long(:value="options.linecap")
						option(value="butt") butt
						option(value="round") round
						option(value="square") square
						option(value="inherit") inherit
</template>

<script>
	export default {
		props: ['options'],
		methods: {
			onChange(event) {
				// todo
			}
		}
	}
</script>
