export const getters = {
	PROJECTS: 'projects',
	NEWEST_PROJECT_ENTITY: 'newestProjectEntity',
	CURRENT_PROJECT: 'currentProject'
};

export const mutations = {
	SET_PROJECTS: 'setProjects',
	SET_PROJECT: 'setProject',
	RESET_PROJECT: 'resetProject',
	CHANGE_NEWEST_PROJECT: 'changeNewestProject',
	ADD_NEW_PROJECT: 'addNewProject',
	REMOVE_PROJECT: 'removeProject'
};

export const actions = {
	LOAD_PROJECTS: 'loadProjects',
	LOAD_PROJECT: 'loadProject',
	CREATE_NEW_PROJECT: 'createNewProject',
	DELETE_PROJECT: 'deleteProject'
};
