<template lang="pug">
	widget.setting
		template(#tools)
			span.icon.reset(title="Reset Shape Options"
				:class="{disabled:!isShapeChanged}"
				@click.prevent="onReset"
			)
		template(#main)
			svg-forms(:figure="figure")
</template>

<script>
	import Widget from '../widget'
	import SvgForms from './forms/index'
	import utils from '@/lib/modules/utils';

	const changedShapes = [];

	function manageShapes(shape, isChanged) {
		const index = changedShapes.indexOf(shape);
		if (isChanged) {
			if (index < 0) changedShapes.push(shape);
		} else {
			if (index >= 0) changedShapes.splice(index, 1);
		}
	}

	export default {
		name: "setting",
		components: {Widget, SvgForms},
		props: ['figure', 'original', 'needSave'],
		data() {
			return {
				isShapeChanged: false
			};
		},
		methods: {
			onReset(/* event */) {
				utils.deepResetValues(this.figure, this.original);
				this.isShapeChanged = false;
			}
		},
		created() {
			changedShapes.length = 0;
		},
		watch: {
			figure: {
				handler(/* val, oldVal */) {
					this.isShapeChanged = !utils.deepEqual(this.figure, this.original);
				},
				deep: true
			},
			isShapeChanged(value) {
				const shape = this.figure;
				if (!shape) return;
				manageShapes(shape, value);

				this.$emit('change', {
					shapes: changedShapes
				});
			},
			needSave(value) {
				if (value) return;
				this.isShapeChanged = false;
				changedShapes.length = 0;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../base/style.scss";

	.setting {
		padding: 0 0 0 $padding;
	}
</style>