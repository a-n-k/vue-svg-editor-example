<template lang="pug">
	div.toolbar.flex-v-center
		div.flex-l-inline.tb-item
			span Shape
			button(title="Delete Shape"
				:disabled="!isShapeSelected"
				@click.prevent="onShapeRemove"
			)
				span.icon.trash
			form
				//select(v-model="model.type" @change="onTypeSelected")
					option(disabled value="") Select shape type
					option(v-for="tp in types" :value="tp") {{tp}}
				select(@change="onShapeAdd")
					option(disabled selected value="") Add New
					option() A
					option() B
					option() C
					option() D
		div.tb-sep
		div.flex-l-inline.tb-item
			span Canvas
			button(title="Reset Size"
				:disabled="!isSizeChanged"
				@click.prevent="onResetSize"
			)
				span.icon.reset
			form
				div.field
					label width
						input.ipt(type="text" )
				div.field
					label height
						input.ipt(type="text" )
		div.tb-sep
		div.flex-l-inline.tb-item
			button.save-all(:disabled="!needSave" @click="onSaveAll") Save All
</template>

<script>
	export default {
		computed: {
			isShapeSelected() {
				// return !!this.figure;
				return false; // todo
			},
			isSizeChanged() {
				return false; // todo
			},
			needSave() {
				return false; // todo
			}
		},
		methods: {
			onShapeRemove(/* event */) {
				console.log('onShapeRemove') // TODO
			},
			onShapeAdd(/* event */) {
				console.log('onShapeAdd') // TODO
			},
			onResetSize(/* event */) {
				console.log('onResetSize') // TODO
			},
			onSaveAll(/* event */) {
				console.log('onSaveAll') // TODO
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/app/ui/editor/base/style.scss";

	.toolbar {
		height: 29px;
		padding: $padding;
		margin-top: $padding;
		border-top: $border;
		border-bottom: $border;
	}

	.tb-item {
		padding: $padding 0;
	}

	select {
		height: 18px;
		border: $border;
		border-radius: $br-radius;
		padding: 0 $padding;
	}

	.tb-sep {
		display: inline-block;
		border: $border;
		margin: 0 20px;
		height: 18px;
	}

	.field {
		display: inline-block;
		font-style: italic;

		.ipt {
			height: 16px;
			border: $border;
			border-radius: $br-radius;
			width: 60px;
			text-align: center;
			margin: 0 10px;
		}
	}

	.save-all {
		border-radius: $br-radius;
		font-weight: bold;
		background-color: green;
		color: white;
		padding: 2px 20px;
	}
</style>