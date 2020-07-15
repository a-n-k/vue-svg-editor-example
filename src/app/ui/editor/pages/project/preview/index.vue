<template lang="pug">
	div.preview
		svg-holder
</template>

<script>
	import SvgHolder from './svg-holder';

	export default {
		components: {SvgHolder}
	}
</script>

<style lang="scss" scoped>
	@import "~@/app/ui/base/scss/index.scss";

	.preview {
		padding: $padding 0;
	}
</style>