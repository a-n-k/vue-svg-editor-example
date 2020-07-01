import interactor from '@/app/domain/interactor';
import {mutations} from '@/app/store/types';
import deep from '@/lib/modules/deep';

function createDuplicate(value) {
	return {value, isChanged: false};
}

export default {
	[mutations.SET_PROJECTS](state, items) {
		state.projects = items;
	},
	[mutations.SET_PROJECT](state, info) {
		const original = state.current.original,
				project = info.project,
				shapes = info.shapes;
		original.project = project;
		original.shapes = shapes;

		const duplicate = state.current.duplicate;
		duplicate.project = createDuplicate(deep.clone(project));
		duplicate.shapes = shapes.map(function (shape) {
			return createDuplicate(deep.clone(shape));
		});
	},
	[mutations.RESET_PROJECT](state) {
		const original = state.current.original;
		original.project = null;
		original.shapes = [];

		const duplicate = state.current.duplicate;
		duplicate.project = null;
		duplicate.shapes = [];
	},
	[mutations.CHANGE_NEWEST_PROJECT](state, input) {
		state.newest.project[input.name] = input.value;
	},
	[mutations.ADD_NEW_PROJECT](state, item) {
		state.projects.unshift(item);
		state.newest.project = interactor.newestProjectEntity();
	}
};