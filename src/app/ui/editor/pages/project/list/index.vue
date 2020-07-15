<template lang="pug">
	div.list
		div(v-if="shapes.length")
			item(v-for="item in shapes"
				:key="item.value.id"
				:info="item"
			)
		div.empty-msg.empty(v-else)
			p Shapes are not exists
			p.add Please add new shape from toolbar above
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';
	import {getters, actions} from '@/app/store/types';
	import Item from './item';

	const INFO = getters.CURRENT_INFO,
			LOAD_SHAPES = actions.LOAD_SHAPES;

	export default {
		name: "list",
		components: {Item},
		computed: {
			...mapGetters([INFO]),
			shapes() {
				return this[INFO].shapes;
			}
		},
		methods: {
			...mapActions([LOAD_SHAPES])
		},
		async created() {
			await this[LOAD_SHAPES]();
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/app/ui/base/scss/index.scss";

	.list {
		width: 100%;
	}

	.empty {
		margin: 100px 0;
		font-size: inherit;
	}

	.add {
		margin: 20px 0 0 0;
		color: navy;
		font-weight: normal;
	}
</style>