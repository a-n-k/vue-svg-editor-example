<template lang="pug">
	div
		div.field
			label.lbl
				span.inline value
				input.ipt-long(
					type="text" data-type="string"
					name="value" :value="options.value"
					@change="onChange"
				)
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
</template>

<script>
	import mixin from './mixin';

	export default {
		name: 'form-text',
		secName: '',
		mixins: [mixin]
	}
</script>