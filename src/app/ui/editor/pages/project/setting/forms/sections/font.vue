<template lang="pug">
	fieldset
		legend font
		div.field
			label.lbl
				span.inline family
				input.ipt-long(
					type="text" data-type="string"
					name="family" :value="options.family"
					@change="onChange"
				)
		div.field
			label.lbl
				span.inline size
				input.ipt-small(
					type="text" data-type="string"
					name="size" :value="options.size"
					@change="onChange"
				)
			label.lbl
				span.inline weight
				input.ipt-small(
					type="text" data-type="string"
					name="weight" :value="options.weight"
					@change="onChange"
				)
</template>

<script>
	import mixin from '../mixin';

	export default {
		secName: 'font',
		mixins: [mixin]
	}
</script>
