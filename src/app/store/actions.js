import interactor from '@/app/domain/interactor';
import {actions, mutations} from '@/app/store/types';

export default {
	async [actions.LOAD_PROJECTS]({commit}) {
		const items = await interactor.loadProjects();
		commit(mutations.SET_PROJECTS, items);
	},
	async [actions.CREATE_NEW_PROJECT]({commit, state}) {
		const model = state.newest.project,
				item = await interactor.createProject(model);
		commit(mutations.ADD_NEW_PROJECT, item);
	}
};