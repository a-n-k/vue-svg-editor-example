<template lang="pug">
	div.flex-v-center.item(
		:class="{selected:isSelected}"
		@click.prevent="onClick"
	)
		div.icon(:class="value.type")
			span(v-if="value.type==='text'") T
		div.label {{label}}
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex';
	import {getters, mutations} from '@/app/store/types';

	const CURRENT_INFO = getters.CURRENT_INFO,
			SET_FIGURE = mutations.SET_FIGURE;

	export default {
		name: 'item',
		props: ['info'],
		computed: {
			...mapGetters([CURRENT_INFO]),
			current() {
				return this[CURRENT_INFO].figure;
			},
			value() {
				return this.info.value;
			},
			label() {
				const value = this.value;
				return [value.name, value.index].join(' - ');
			},
			isSelected() {
				const current = this.current;
				if (!current) return false;
				return current.value.id === this.value.id;
			}
		},
		methods: {
			...mapMutations([SET_FIGURE]),
			onClick(/* event */) {
				const info = this.isSelected ? null : this.info;
				this[SET_FIGURE](info);
			}
		}
	}
</script>

<style lang="scss" scoped>
	$size: 20px;

	.item {
		margin: 5px 0;
		padding: 5px 0 5px 10px;
		cursor: pointer;
	}

	.item:hover {
		background-color: #dddddd;
	}

	.selected {
		background-color: #cccccc;
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

	.label {
		display: inline-flex;
		margin: 0 0 0 20px;
	}
</style>