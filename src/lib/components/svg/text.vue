<template lang="pug">
	text(
		:x="options.x" :y="options.y"
		:style="style"
	) {{options.value}}
</template>

<script>
	import {base} from './mixins';

	export default {
		name: 'svg-text',
		mixins: [base]
	}
</script>