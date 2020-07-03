import interactor from '@/app/domain/interactor';

export default {
	projects: [],
	newest: {
		project: interactor.newestProjectEntity()
	},
	current: {
		original: {
			project: null, shapes: [], figure: null
		},
		// {value: project or shape entity, isChanged: false}
		duplicate: {
			project: null, shapes: [], figure: null
		}
	}
}