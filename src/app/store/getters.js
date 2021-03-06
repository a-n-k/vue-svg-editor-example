import {getters} from '@/app/store/types';
import interactor from '@/app/domain/interactor';

export default {
	[getters.PROJECTS](state) {
		return state.projects;
	},
	[getters.SHAPE_TYPES]() {
		return interactor.shapeTypes();
	},
	[getters.CURRENT_INFO](state) {
		return state.current.duplicate;
	}
}