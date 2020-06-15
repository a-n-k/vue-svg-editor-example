<template lang="pug">
	rect(
		:x="options.x" :y="options.y"
		v-bind="rounded"
		:width="options.width" :height="options.height"
		:style="style"
	)
</template>

<script>
	import {base} from './mixins';

	export default {
		name: "svg-rect",
		mixins: [base],
		computed: {
			rounded() {
				const result = {},
						options = this.options,
						rx = options.rx,
						ry = options.ry;
				if (rx) {
					result.rx = rx;
				}
				if (ry) {
					result.ry = ry;
				}
				return result;
			}
		}
	}
</script>
