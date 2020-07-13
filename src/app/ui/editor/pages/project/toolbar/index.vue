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
				div.s-field
					label width
						input.ipt(type="text"
							name="width" :value="size.width"
							@change="onChangeSize"
						)
				div.s-field
					label height
						input.ipt(type="text"
							name="height" :value="size.height"
							@change="onChangeSize"
						)
		div.tb-sep
		div.flex-l-inline
			button.save-all(:disabled="!needSave" @click="onSaveAll") Save All
</template>

<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex';
	import {getters, actions, mutations} from '@/app/store/types';
	import cast from '@/lib/modules/cast';

	const
			MSG_DELETE_SHAPE = 'Are you sure want to delete the shape?',
			{SHAPE_TYPES, CURRENT_INFO} = getters,
			{CREATE_NEW_SHAPE, DELETE_SHAPE} = actions,
			{CHANGE_SIZE, RESET_SIZE} = mutations;

	export default {
		computed: {
			...mapGetters([SHAPE_TYPES, CURRENT_INFO]),
			isShapeSelected() {
				return !!this[CURRENT_INFO].figure;
			},
			project() {
				return this[CURRENT_INFO].project;
			},
			size() {
				const project = this.project;
				return (project && project.value.size) || {};
			},
			isSizeChanged() {
				const project = this.project;
				return (project && project.isChanged.size);
			},
			needSave() {
				return false; // todo
			}
		},
		methods: {
			...mapActions([CREATE_NEW_SHAPE, DELETE_SHAPE]),
			...mapMutations([CHANGE_SIZE, RESET_SIZE]),
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
				this[RESET_SIZE]();
			},
			onChangeSize(event) {
				const {name, value} = event.target,
						numValue = cast.toInt(value);

				this[CHANGE_SIZE]({
					name, value: numValue
				});
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

	.s-field {
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