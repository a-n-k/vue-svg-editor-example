<template lang="pug">
	widget.e-preview
		template(#tools)
			span.icon.trash(title="Delete Project"
				@click.prevent="onDelete"
			)
			span.spr
			form.canvas-size
				span.icon.reset(title="Reset Size"
					:class="{disabled:!isSizeChanged}"
					@click.prevent="onReset"
				)
				div.field
					label width
						input.ipt(type="text" v-model.lazy.trim.number="hSize.width" required)
				div.field
					label height
						input.ipt(type="text" v-model.lazy.trim.number="hSize.height" required)
			span.spr
			button(:disabled="!needSave" @click="onSaveAll") Save All
		template(#main)
			div.e-main
				holder(:shapes="shapes" :size="hSize")
</template>

<script>
	import Widget from '../widget';
	import Holder from './holder';
	import utils from '@/lib/modules/utils';

	const MSG_DELETE_PROJECT = 'Are you sure want to delete the project?';

	export default {
		name: 'preview',
		components: {Widget, Holder},
		props: ['shapes', 'size', 'needSave'],
		data() {
			return {
				hSize: utils.deepClone(this.size),
				isSizeChanged: false
			};
		},
		methods: {
			onDelete(/* event */) {
				if (confirm(MSG_DELETE_PROJECT)) {
					this.$emit('remove');
				}
			},
			onReset(/* event */) {
				utils.deepResetValues(this.hSize, this.size);
				this.isSizeChanged = false;
			},
			onSaveAll(/* event */) {
				this.$emit('save');
			}
		},
		watch: {
			hSize: {
				handler(/* val, oldVal */) {
					this.isSizeChanged = !utils.deepEqual(this.hSize, this.size);
				},
				deep: true
			},
			isSizeChanged(value) {
				this.$emit('change', {
					value, size: this.hSize
				});
			},
			needSave(value) {
				if (!value) this.isSizeChanged = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/app/ui/base/scss/index.scss";

	.e-preview {
		padding: 0 $padding;
	}

	/* tools */

	.canvas-size .reset {
		margin-right: 20px;
	}

	.spr {
		display: inline-block;
		border: $border;
		margin: 0 20px;
		height: 100%;
	}

	.canvas-size {
		display: inline-flex;
		flex: 3;
		justify-content: center;
		align-items: center;
	}

	.field {
		display: inline-block;
		padding: 0 10px;
		color: navy;
		font-style: italic;
		font-size: 16px;

		.ipt {
			border: $border;
			border-radius: $br-radius;
			width: 45px;
			text-align: center;
			margin: 10px;
			font-size: 16px;
		}

		span {
			font-weight: bold;
		}
	}

	button {
		display: inline-flex;
		flex: 1;
		justify-content: center;
		padding: 2px;
		font-size: 16px;
		border-radius: $br-radius;
		font-weight: bold;
		cursor: pointer;
		background-color: green;
		color: white;
	}

	button[disabled] {
		opacity: 0.3;
	}

	/* main */

	.e-main {
		padding: 20px;
		margin-top: 10px;
	}
</style>