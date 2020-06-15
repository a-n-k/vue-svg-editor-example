<template lang="pug">
	widget.list
		template(#tools)
			span.icon.trash(title="Delete Figure"
				:class="{disabled:!isSelected}"
				@click.prevent="onDelete"
			)
			span.icon.plus(title="Add Figure"
				:class="{disabled:isNew}"
				@click.prevent="onAdd"
			)
		template(#main)
			div(v-if="shapes.length")
				item(v-for="item in shapes" :key="item.id"
					:value="item" :current="figure"
					@selected="onShapeSelected"
				)
			div.empty(v-else)
				p Figures are not exists
				p.add Please add new figure from toolbar above
			div.modal(v-if="isNew")
				div.content
					div.close
						button(@click="cancel") &times;
					form
						select(v-model="model.type" @change="onTypeSelected")
							option(disabled value="") Select shape type
							option(v-for="tp in types" :value="tp") {{tp}}
</template>

<script>
	import Widget from '../widget';
	import Item from './item';

	const
			MSG_DELETE_FIGURE = 'Are you sure want to delete the figure?';

	export default {
		name: "list",
		components: {Widget, Item},
		props: ['shapes', 'figure', 'newShape', 'changeShape', 'types'],
		data() {
			return {isNew: false, model: {}};
		},
		computed: {
			isSelected() {
				return !!this.figure;
			}
		},
		methods: {
			onDelete(/* event */) {
				if (!this.isSelected) return;
				if (confirm(MSG_DELETE_FIGURE)) {
					this.$emit('remove');
				}
			},
			onAdd(/* event */) {
				if (this.isNew) return;
				this.model = this.newShape();
				this.isNew = true;
			},
			cancel(/* event */) {
				this.isNew = false;
			},
			onTypeSelected(/* event */) {
				this.isNew = false;
				this.$emit('type', this.model);
			},
			onShapeSelected(item) {
				this.$emit('change', item);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../base/style.scss";

	.list {
		padding: 0 $padding 0 0;
	}

	.plus {
		background: url(~@/app/ui/editor/pages/project/assets/plus.svg);
	}

	.empty {
		@include empty-msg();
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