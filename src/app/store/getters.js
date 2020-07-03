import {getters} from '@/app/store/types';
import interactor from '@/app/domain/interactor';

export default {
	[getters.PROJECTS](state) {
		return state.projects;
	},
	[getters.SHAPE_TYPES]() {
		return interactor.shapeTypes();
	},
	[getters.NEWEST_ENTITIES](state) {
		return state.newest;
	},
	[getters.CURRENT_INFO](state) {
		return state.current.duplicate;
	}
}