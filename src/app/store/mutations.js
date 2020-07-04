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
	[mutations.SET_PROJECT](state, project) {
		const original = state.current.original;
		original.project = project;

		const duplicate = state.current.duplicate;
		duplicate.project = createDuplicate(deep.clone(project));
	},
	[mutations.RESET_PROJECT](state) {
		const original = state.current.original;
		original.project = null;
		original.shapes = [];

		const duplicate = state.current.duplicate;
		duplicate.project = null;
		duplicate.shapes = [];
	},
	[mutations.ADD_NEW_PROJECT](state, item) {
		state.projects.unshift(item);
	},
	[mutations.REMOVE_PROJECT](state, projectId) {
		const projects = state.projects,
				index = projects.findIndex(byId(projectId));
		if (index < 0) return;
		projects.splice(index, 1);
	},

	[mutations.ADD_NEW_SHAPE](state, value) {
		const current = state.current,
				original = current.original;
		original.shapes.push(value);
		original.figure = value;

		const duplicate = current.duplicate,
				clone = createDuplicate(deep.clone(value));
		duplicate.shapes.push(clone);
		duplicate.figure = clone;
	},
	[mutations.SET_SHAPES](state, items) {
		const original = state.current.original
		original.shapes = items;

		const duplicate = state.current.duplicate;
		duplicate.shapes = items.map(function (shape) {
			return createDuplicate(deep.clone(shape));
		});
	},
	// [mutations.SET_FIGURE](state, item) {
	// 	const current = state.current;
	// 	current.duplicate.figure = item;
	// 	const original = current.original;
	// 	original.figure = original.shapes.find(byId(item.id));
	// }
};