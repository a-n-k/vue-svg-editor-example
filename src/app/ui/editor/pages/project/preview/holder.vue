<template lang="pug">
	div.svg-holder(:style="style")
		svg-canvas(:shapes="shapes" :size="size")
</template>

<script>
	import SvgCanvas from '@/lib/components/svg/canvas';

	export default {
		name: 'holder',
		components: {SvgCanvas},
		props: ['shapes', 'size'],
		computed: {
			style() {
				const size = this.size;
				return {
					width: size.width + size.unit,
					height: size.height + size.unit
				};
			}
		}
	}
</script>

<style lang="scss" scoped>
	.svg-holder {
		background: url('~@/app/ui/editor/pages/project/assets/bg.svg');
		margin: 0 auto;
	}
</style>