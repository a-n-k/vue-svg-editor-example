<template lang="pug">
	div.svg-holder(:style="style")
		svg-canvas(:shapes="shapes" :size="size")
</template>

<script>
	import {mapGetters} from 'vuex';
	import {getters} from '@/app/store/types';
	import SvgCanvas from '@/lib/components/svg/canvas';

	const {CURRENT_INFO} = getters

	export default {
		components: {SvgCanvas},
		computed: {
			...mapGetters([CURRENT_INFO]),
			project() {
				return this[CURRENT_INFO].project;
			},
			size() {
				const project = this.project;
				return (project && project.value.size);
			},
			shapes() {
				return this[CURRENT_INFO].shapes
						.map((item) => item.value);
			},
			style() {
				const size = this.size;
				return (size && {
					width: size.width + size.unit,
					height: size.height + size.unit
				});
			}
		}
	}
</script>

<style lang="scss">
	.svg-holder {
		background: url('~@/lib/icons/bg.svg');
		margin: 0 auto;
	}
</style>