<template lang="pug">
	circle(
		:cx="options.cx" :cy="options.cy"
		:r="options.r"
		:style="style"
	)
</template>

<script>
	import {base} from './mixins';

	export default {
		name: "svg-circle",
		mixins: [base]
	}
</script>