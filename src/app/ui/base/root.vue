<template lang="pug">
	div.page
		router-view
</template>

<script>
	const TITLE = 'SVG Editor',
			TITLE_SEP = ' - ';

	export default {
		methods: {
			setTitle(titleEnd) {
				document.title = titleEnd ?
						[TITLE, titleEnd].join(TITLE_SEP) :
						TITLE;
			}
		},
		mounted() {
			const meta = this.$route.meta;
			this.setTitle(meta && meta.title);
		},
		watch: {
			$route(to /* , from */) {
				const meta = to.meta;
				this.setTitle(meta && meta.title);
			}
		}
	}
</script>

<style lang="scss">
	@import './scss/common.scss';
	@import './scss/index.scss';

	.page {
		@include box();
	}
</style>