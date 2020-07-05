<template lang="pug">
	div.toolbar.flex-v-center
		div.flex-l-inline
			span Shape
			button(title="Delete Shape"
				:disabled="!isShapeSelected"
				@click.prevent="onShapeRemove"
			): span.icon.trash
			form
				select(@change="onShapeAdd")
					option(disabled selected value="") Add New
					option(v-for="(st,i) in shapeTypes" :value="i") {{st.name}}
		div.tb-sep
		div.flex-l-inline
			span Canvas
			button(title="Reset Size"
				:disabled="!isSizeChanged"
				@click.prevent="onResetSize"
			): span.icon.reset
			form
				div.field
					label width
						input.ipt(type="text" )
				div.field
					label height
						input.ipt(type="text" )
		div.tb-sep
		div.flex-l-inline
			button.save-all(:disabled="!needSave" @click="onSaveAll") Save All
</template>

<script>
	import {mapGetters, mapActions /*, mapMutations*/} from 'vuex';
	import {getters, actions} from '@/app/store/types';

	const
			MSG_DELETE_SHAPE = 'Are you sure want to delete the shape?',
			SHAPE_TYPES = getters.SHAPE_TYPES,
			CURRENT_INFO = getters.CURRENT_INFO,
			CREATE_NEW_SHAPE = actions.CREATE_NEW_SHAPE,
			DELETE_SHAPE = actions.DELETE_SHAPE;

	export default {
		computed: {
			...mapGetters([SHAPE_TYPES, CURRENT_INFO]),
			isShapeSelected() {
				return !!this[CURRENT_INFO].figure;
			},
			isSizeChanged() {
				return false; // todo
			},
			needSave() {
				return false; // todo
			}
		},
		methods: {
			...mapActions([CREATE_NEW_SHAPE, DELETE_SHAPE]),
			onShapeRemove(/* event */) {
				if (!confirm(MSG_DELETE_SHAPE)) return;
				this[DELETE_SHAPE]();
			},
			async onShapeAdd(event) {
				const element = event.target,
						value = element.value;
				if (value === '') return;

				const info = this[SHAPE_TYPES][Number(value)];
				await this[CREATE_NEW_SHAPE](info);
				element.value = '';
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
	@import "~@/app/ui/base/scss/index.scss";

	.toolbar {
		padding: 7px $padding;
		border-bottom: $border;
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