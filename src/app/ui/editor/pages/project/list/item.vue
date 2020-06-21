<template lang="pug">
	div.item(:class="{selected:isSelected}" @click.prevent="onClick")
		div.icon(:class="value.type")
			span(v-if="value.type==='text'") T
		div.type {{label}}
</template>

<script>
	export default {
		name: 'item',
		props: ['value', 'current'],
		computed: {
			label() {
				const value = this.value;
				return [value.type, value.index].join(' - ');
			},
			isSelected() {
				const shape = this.current;
				return (shape && shape.id) === this.value.id;
			}
		},
		methods: {
			onClick(/* event */) {
				const value = this.isSelected ? null : this.value;
				this.$emit('selected', value);
			}
		}
	}
</script>

<style lang="scss" scoped>
	$size: 20px;

	.item {
		display: flex;
		margin: 5px 0;
		padding: 5px 0 5px 10px;
		cursor: pointer;
	}

	.item:hover {
		background-color: #efefef;
	}

	.selected {
		background-color: #e1e1e1;
		font-weight: bold;
	}

	.icon {
		width: $size;
		height: $size;
		border: 2px solid black;
		display: inline-flex;
	}

	.circle {
		border-radius: $size/2;
	}

	.ellipse {
		border-radius: $size $size/2;
	}

	.line {
		height: 0;
		margin-top: 7px;
	}

	.rectangle {
		border-radius: 5px;
	}

	.text {
		font-size: 20px;
		font-weight: bold;
		padding-left: 2px;
	}

	.type {
		display: inline-flex;
		margin: 0 0 0 20px;
	}
</style>