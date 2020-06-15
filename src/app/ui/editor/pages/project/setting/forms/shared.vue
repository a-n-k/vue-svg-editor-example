<template lang="pug">
	div.shared
		div.field(v-if="!isLine")
			label.lbl fill
				input.ipt.color(type="text" v-model.lazy.trim="options.fill" required)
		div.field
			div.name stroke
			div.field
				label.lbl width
					input.ipt(type="text" v-model.lazy.trim.number="stroke.width" required)
			div(v-if="stroke.width")
				div.field
					label.lbl color
						input.ipt.color(type="text" v-model.lazy.trim="stroke.color" required)
				div.field(v-if="isLine")
					label.lbl linecap
						select.ipt.color(v-model="stroke.linecap")
							option(value="butt") butt
							option(value="round") round
							option(value="square") square
							option(value="inherit") inherit
				div.field
					label.lbl dasharray
						input.ipt.color(type="text" v-model.lazy.trim="stroke.dasharray")
</template>

<script>
	export default {
		name: "shared",
		props: ['type', 'options'],
		computed: {
			stroke() {
				return this.options.stroke;
			},
			isLine() {
				return this.type === 'line';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shared .color {
		width: 100px;
	}

	.shared .name {
		color: navy;
		font-style: italic;
		font-size: 16px;
		font-weight: bold;
	}
</style>