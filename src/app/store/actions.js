import interactor from '@/app/domain/interactor';
import {actions, mutations} from '@/app/store/types';
import {byId} from '@/lib/modules/predicates'

export default {
	async [actions.LOAD_PROJECTS]({commit}) {
		const items = await interactor.loadProjects();
		commit(mutations.SET_PROJECTS, items);
	},
	async [actions.LOAD_PROJECT]({commit, state}, id) {
		let project = state.projects.find(byId(id)),
				shapes = [];
		if (project) {
			shapes = await interactor.loadShapes(id);
		} else {
			const info = await interactor.loadProject(id);
			if (!info) {
				commit(mutations.RESET_PROJECT);
				return;
			}
			project = info.project;
			shapes = info.shapes;
		}
		commit(mutations.SET_PROJECT, {project, shapes});
	},
	async [actions.CREATE_NEW_PROJECT]({commit, state}) {
		const model = state.newest.project,
				item = await interactor.createProject(model);
		commit(mutations.ADD_NEW_PROJECT, item);
	}
};