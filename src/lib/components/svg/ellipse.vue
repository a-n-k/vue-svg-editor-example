<template lang="pug">
	ellipse(
		:cx="options.cx" :cy="options.cy"
		:rx="options.rx" :ry="options.ry"
		:style="style"
	)
</template>

<script>
	import {base} from './mixins';

	export default {
		name: "svg-ellipse",
		mixins: [base]
	}
</script>
