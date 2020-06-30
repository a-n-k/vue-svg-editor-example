import interactor from '@/app/domain/interactor';

export default {
	projects: [],
	newest:{
		project: interactor.newestProjectEntity()
	}
}