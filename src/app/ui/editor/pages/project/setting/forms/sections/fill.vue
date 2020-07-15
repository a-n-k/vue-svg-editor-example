<template lang="pug">
	fieldset
		legend fill
		div.field
			label.lbl
				span.inline color
				input.ipt-long(
					type="text" data-type="color"
					name="color" :value="options.color"
					@change="onChange"
				)
		div.field
			label.lbl
				span.inline opacity
				input.ipt-small(
					type="text" data-type="float"
					name="opacity" :value="options.opacity"
					@change="onChange"
				)
</template>

<script>
	import mixin from '../mixin';

	export default {
		secName: 'fill',
		mixins: [mixin]
	}
</script>
