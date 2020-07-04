<template lang="pug">
	div.list
		div(v-if="shapes.length")
			item(v-for="item in shapes" :key="item.value.id"
				:info="item" :current="figure"
				@selected="onShapeSelected"
			)
		div.empty-msg.empty(v-else)
			p Shapes are not exists
			p.add Please add new shape from toolbar above

		//template(#tools)
			//span.icon.trash(title="Delete Figure"
				//:class="{disabled:!isSelected}"
				//@click.prevent="onDelete"
			//)

</template>

<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex';
	import {getters, actions, mutations} from '@/app/store/types';
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
			},
			// figure() {
			// 	return this[INFO].figure;
			// }
			// isSelected() {
			// 	return !!this.figure;
			// }
		},
		methods: {
			...mapActions([LOAD_SHAPES]),


			// onDelete(/* event */) {
			// 	if (!this.isSelected) return;
			// 	if (confirm(MSG_DELETE_FIGURE)) {
			// 		this.$emit('remove');
			// 	}
			// },
			onShapeSelected(item) {
				// 	// 	this.figure = item; // todo
			}
		},
		async created() {
			await this[LOAD_SHAPES]();
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/app/ui/base/scss/index.scss";

	.list {
		padding: 0 $padding 0 0;
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