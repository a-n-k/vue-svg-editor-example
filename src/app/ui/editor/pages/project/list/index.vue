<template lang="pug">
	div.list
		//div(v-if="shapes.length")
			//item(v-for="item in shapes" :key="item.value.id"
				//:info="item" :current="figure"
				//@selected="onShapeSelected"
		//)
		//div.empty-msg.empty(v-else)
			p Shapes are not exists
			p.add Please add new shape from toolbar above

		//template(#tools)
			//span.icon.trash(title="Delete Figure"
				//:class="{disabled:!isSelected}"
				//@click.prevent="onDelete"
			//)
		//template(#main)
			//div(v-if="shapes.length")
				//item(v-for="item in shapes" :key="item.id"
					//:value="item" :current="figure"
					//@selected="onShapeSelected"
				//)

</template>

<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex';
	import {getters, actions, mutations} from '@/app/store/types';
	import Item from './item';

	const INFO = getters.CURRENT_INFO;

	export default {
		name: "list",
		components: {Item},
		// props: [  'newShape', 'changeShape']
		computed: {
			// ...mapGetters([INFO]),
			// shapes() {
			// 	return this[INFO].shapes;
			// },
			// figure(){
			// 	return this[INFO].figure;
			// }
			// isSelected() {
			// 	return !!this.figure;
			// }
		},
		methods: {
			// onDelete(/* event */) {
			// 	if (!this.isSelected) return;
			// 	if (confirm(MSG_DELETE_FIGURE)) {
			// 		this.$emit('remove');
			// 	}
			// },
			// onShapeSelected(item) {
			// 	// 	this.figure = item;
			// }
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

	.modal {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #efefef;

		.content {
			background-color: white;
			padding: $padding;
			border-radius: $br-radius;
			width: 80%;
			margin: 50px auto;

			.close {
				text-align: right;
				margin: -10px 0 10px 0;

				button {
					font-size: 25px;
				}
			}

			select {
				width: 100%;
				height: 24px;
				font-size: 16px;
				color: navy;
				border: $border;
			}
		}
	}
</style>