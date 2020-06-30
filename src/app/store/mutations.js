import interactor from '@/app/domain/interactor';
import {mutations} from '@/app/store/types';

export default {
	[mutations.SET_PROJECTS](state, items) {
		state.projects = items;
	},
	[mutations.CHANGE_NEWEST_PROJECT](state, input) {
		state.newest.project[input.name] = input.value;
	},
	[mutations.ADD_NEW_PROJECT](state, item) {
		state.projects.unshift(item);
		state.newest.project = interactor.newestProjectEntity();
	}
};