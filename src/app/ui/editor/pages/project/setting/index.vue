<template lang="pug">
	div.setting
		svg-forms
</template>

<script>
	import SvgForms from './forms';

	export default {
		components: {SvgForms}
	}
</script>

<style lang="scss" scoped>
	@import "~@/app/ui/base/scss/index.scss";

	.setting {
		width: 100%;
		padding: 0 0 0 $padding;
	}
</style>