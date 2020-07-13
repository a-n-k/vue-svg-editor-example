import {mutations} from '@/app/store/types';
import deep from '@/lib/modules/deep';
import {byId} from '@/lib/modules/predicates';
import cast from '@/lib/modules/cast';

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

function isShapesChanged(state) {
	const changed = state.current.duplicate.shapes.filter(function (item) {
		return item.isChanged;
	});
	return changed.length > 0;
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
	},

	[mutations.CHANGE_SHAPE_INDEX](state, info) {
		const {original, duplicate} = state.current,
				oShape = original.figure,
				dShape = duplicate.figure.value;
		dShape.index = cast[info.dataType](info.value);
		duplicate.figure.isChanged = !deep.equal(original.figure, dShape);
		duplicate.shapes.sort(function (a, b) {
			return a.value.index - b.value.index;
		});
		duplicate.project.isChanged.shapes = isShapesChanged(state);
	},
	[mutations.CHANGE_SHAPE_OPTION](state, info) {
		const {original, duplicate} = state.current,
				{secName, propName, value, dataType} = info,
				castValue = cast[dataType](value),
				figure = duplicate.figure,
				fValue = figure.value,
				options = fValue.options;
		if (secName) {
			options[secName][propName] = castValue;
		} else {
			options[propName] = castValue;
		}
		figure.isChanged = !deep.equal(original.figure, fValue);
		duplicate.project.isChanged.shapes = isShapesChanged(state);
	}
};