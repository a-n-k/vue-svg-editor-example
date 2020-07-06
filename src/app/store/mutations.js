import {mutations} from '@/app/store/types';
import deep from '@/lib/modules/deep';
import {byId} from '@/lib/modules/predicates';

function createDuplicate(value, isProject = false) {
	return {
		value,
		isChanged: isProject ? {size: false, shapes: false} : false
	};
}

function getSizeInfo(state) {
	const {original, duplicate} = state.current;
	return {
		originalSize: original.project.size,
		duplicateProject: duplicate.project,
		duplicateSize: duplicate.project.value.size
	};
}

export default {
	[mutations.SET_PROJECTS](state, items) {
		state.projects = items;
	},
	[mutations.SET_PROJECT](state, project) {
		const {original, duplicate} = state.current;
		original.project = project;
		duplicate.project = createDuplicate(deep.clone(project), true);
	},
	[mutations.RESET_PROJECT](state) {
		const {original, duplicate} = state.current;
		original.project = duplicate.project = null;
		original.shapes = [];
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
		const {original, duplicate} = state.current;
		original.shapes.push(value);
		original.figure = value;

		const clone = createDuplicate(deep.clone(value));
		duplicate.shapes.push(clone);
		duplicate.figure = clone;
	},
	[mutations.SET_SHAPES](state, items) {
		const {original, duplicate} = state.current;
		original.shapes = items;

		duplicate.shapes = items.map(function (shape) {
			return createDuplicate(deep.clone(shape));
		});
	},
	[mutations.SET_FIGURE](state, item) {
		const {original, duplicate} = state.current;
		duplicate.figure = item;
		original.figure = item && original.shapes.find(byId(item.value.id));
	},
	[mutations.REMOVE_SHAPE](state, shapeId) {
		const {original, duplicate} = state.current;

		let shapes = original.shapes,
				index = shapes.findIndex(byId(shapeId));
		shapes.splice(index, 1);

		shapes = duplicate.shapes;
		index = shapes.findIndex(byId(shapeId, 'value'));
		shapes.splice(index, 1);
	},

	[mutations.CHANGE_SIZE](state, info) {
		const {originalSize, duplicateProject, duplicateSize} = getSizeInfo(state);
		duplicateSize[info.name] = info.value;
		duplicateProject.isChanged.size = !deep.equal(originalSize, duplicateSize);
	},
	[mutations.RESET_SIZE](state) {
		const {originalSize, duplicateProject, duplicateSize} = getSizeInfo(state);
		deep.resetValues(duplicateSize, originalSize);
		duplicateProject.isChanged.size = false;
	}
};