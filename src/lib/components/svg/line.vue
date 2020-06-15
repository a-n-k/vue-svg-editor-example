<template lang="pug">
	line(
		:x1="options.x1" :y1="options.y1"
		:x2="options.x2" :y2="options.y2"
		:style="style"
	)
</template>

<script>
	import {base} from './mixins';

	export default {
		name: "svg-line",
		mixins: [base]
	}
</script>
