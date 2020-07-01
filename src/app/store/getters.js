import {getters} from '@/app/store/types';


export default {
	[getters.NEWEST_PROJECT_ENTITY](state) {
		return state.newest.project;
	},
	[getters.PROJECTS](state) {
		return state.projects;
	},
	[getters.CURRENT_PROJECT](state) {
		return state.current.duplicate.project;
	}
}