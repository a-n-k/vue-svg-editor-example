import interactor from '@/app/domain/interactor';
import {actions, mutations} from '@/app/store/types';
import {byId} from '@/lib/modules/predicates';

export default {
	async [actions.LOAD_PROJECTS]({commit}) {
		const items = await interactor.loadProjects();
		commit(mutations.SET_PROJECTS, items);
	},
	async [actions.LOAD_PROJECT]({commit, state}, id) {
		let project = state.projects.find(byId(id));
		if (!project) {
			project = await interactor.loadProject(id);
			if (!project) {
				commit(mutations.RESET_PROJECT);
				return;
			}
		}
		commit(mutations.SET_PROJECT, project);
	},
	async [actions.CREATE_NEW_PROJECT]({commit, state}, model) {
		const item = await interactor.createProject(model);
		commit(mutations.ADD_NEW_PROJECT, item);
	},
	async [actions.DELETE_PROJECT]({commit, state}) {
		const projectId = state.current.original.project.id;
		await interactor.deleteProject(projectId);
		commit(mutations.REMOVE_PROJECT, projectId);
		commit(mutations.RESET_PROJECT);
	},

	async [actions.CREATE_NEW_SHAPE]({commit, state}, info) {
		const {project, shapes} = state.current.original,
				projectId = project.id,
				shapesLength = shapes.length,
				lastIndex = shapesLength ? shapes[shapesLength - 1].index : 0,
				shape = await interactor.createShape(info, projectId, lastIndex);
		commit(mutations.ADD_NEW_SHAPE, shape);
	},
	async [actions.LOAD_SHAPES]({commit, state}) {
		const projectId = state.current.original.project.id;
		const items = await interactor.loadShapes(projectId);
		commit(mutations.SET_SHAPES, items);
	},
	async [actions.DELETE_SHAPE]({commit, state}) {
		const shapeId = state.current.original.figure.id;
		await interactor.deleteShape(shapeId);
		commit(mutations.REMOVE_SHAPE, shapeId);
		commit(mutations.SET_FIGURE, null);
	},
	async [actions.SAVE_ALL]({commit, state}) {
		const {project, shapes} = state.current.duplicate;
		await interactor.updateProject(project.value);
		if (project.isChanged.shapes) {
			const changedShapes = shapes.filter((shape) => shape.isChanged);
			const length = changedShapes.length;
			if (length) {
				for (let i = 0; i < length; i++) {
					await interactor.updateShape(changedShapes[i].value);
				}
			}
		}
		commit(mutations.SET_SAVED_INFO);
	}
};