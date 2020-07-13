import {mapMutations} from 'vuex';
import {mutations} from '@/app/store/types';

const {CHANGE_SHAPE_OPTION} = mutations;

export default {
	props: {
		options: {type: Object, required: true}
	},
	methods: {
		...mapMutations([CHANGE_SHAPE_OPTION]),
		onChange(event) {
			const {name, value, dataset} = event.target,
					secName = this.$options.secName,
					info = {
						secName, propName: name, value,
						dataType: dataset.type
					};
			this[CHANGE_SHAPE_OPTION](info);
		}
	}
}