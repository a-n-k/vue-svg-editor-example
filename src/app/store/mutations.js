import interactor from '@/app/domain/interactor';
import {mutations} from '@/app/store/types';
import deep from '@/lib/modules/deep';
import {byId} from '@/lib/modules/predicates';

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
	[mutations.CHANGE_NEWEST_PROJECT](state, {name, value}) {
		state.newest.project[name] = value;
	},
	[mutations.ADD_NEW_PROJECT](state, item) {
		state.projects.unshift(item);
		state.newest.project = interactor.newestProjectEntity();
	},
	[mutations.REMOVE_PROJECT](state, projectId) {
		const projects = state.projects,
				index = projects.findIndex(byId(projectId));
		projects.splice(index, 1);
	},

	[mutations.ADD_NEW_SHAPE](state, value) {
		const current = state.current,
				original = current.original;
		original.shapes.push(value);
		original.figure = value;

		const duplicate = current.duplicate,
				clone = deep.clone(value);
		duplicate.shapes.push(clone);
		duplicate.figure = clone;
	},
	// [mutations.SET_FIGURE](state, item) {
	// 	const current = state.current;
	// 	current.duplicate.figure = item;
	// 	const original = current.original;
	// 	original.figure = original.shapes.find(byId(item.id));
	// }
};