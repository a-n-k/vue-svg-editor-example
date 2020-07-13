<template lang="pug">
	div.forms(v-if="figure")
		div.header.flex-v-center
			div.flex-l-inline
				button(title="Reset Shape Options"
					:disabled="!isChanged"
					@click.prevent="onReset"
				): span.icon.reset
			div.flex-l-inline {{fValue.name}}
		form.f-form
			div.field
				label.lbl
					span.inline zIndex
					input.ipt-small(
						type="text" data-type="int"
						:value="fValue.index"
						@change="onChangeIndex"
					)
			component(
				:is="componentName(fValue.type)"
				:options="fValue.options"
			)
			sections(:options="fValue.options")
	div.empty-msg.empty(v-else)
		p Please select shape from list
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex';
	import {getters, mutations} from '@/app/store/types';

	import FormCircle from './circle';
	import FormEllipse from './ellipse';
	import FormLine from './line';
	import FormRect from './rectangle';
	import FormText from './text';
	import Sections from './sections';

	const
			{CURRENT_INFO} = getters,
			{CHANGE_SHAPE_INDEX} = mutations;

	export default {
		components: {
			FormCircle, FormEllipse, FormLine, FormRect, FormText,
			Sections
		},
		computed: {
			...mapGetters([CURRENT_INFO]),
			figure() {
				return this[CURRENT_INFO].figure;
			},
			fValue() {
				return this.figure.value;
			},
			isChanged() {
				return this.figure.isChanged;
			}
		},
		methods: {
			...mapMutations([CHANGE_SHAPE_INDEX]),
			componentName(type) {
				return ['form', type].join('-');
			},
			onChangeIndex(event) {
				const {value, dataset} = event.target;
				this[CHANGE_SHAPE_INDEX]({
					value, dataType: dataset.type
				});
			},
			onReset( /* event */) {
				console.log('onShapeReset') // todo

				// 		utils.deepResetValues(this.figure, this.original);
				// 		this.isShapeChanged = false;
			}
		}
	}
</script>

<style lang="scss">
	@import "~@/app/ui/base/scss/index.scss";

	.empty {
		margin: 100px 0;
		font-size: inherit;
	}

	.forms {
		.icon {
			margin-left: 0;
		}

		input, select {
			border: $border;
			border-radius: $br-radius;
			text-align: center;
			padding: 2px 7px;
		}

		.ipt-small {
			width: 50px;
		}

		.ipt-long {
			width: 150px;
		}
	}

	.header {
		font-style: italic;
		font-weight: bold;
		padding-bottom: 5px;
		border-bottom: $border;
		color: navy;
	}

	.f-form {
		padding: $padding 0;

		fieldset {
			padding: $padding 0;
			border-top: $border;
		}

		legend {
			margin-left: $padding*2;
			padding: 0 5px 3px 5px;
			color: navy;
			font-weight: bold;
			font-style: italic;
		}
	}

	.field {
		padding-bottom: $padding;

		.lbl {
			color: navy;
			font-style: italic;
			margin-right: $padding;

			span {
				margin-right: $padding;
			}
		}
	}

	.inline {
		display: inline-block;
		vertical-align: center;
	}
</style>