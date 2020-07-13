export const getters = {
	PROJECTS: 'projects',
	SHAPE_TYPES: 'shapeTypes',
	CURRENT_INFO: 'currentInfo'
};

export const mutations = {
	SET_PROJECTS: 'setProjects',
	SET_PROJECT: 'setProject',
	RESET_PROJECT: 'resetProject',
	ADD_NEW_PROJECT: 'addNewProject',
	REMOVE_PROJECT: 'removeProject',
	ADD_NEW_SHAPE: 'addNewShape',
	SET_SHAPES: 'setShapes',
	SET_FIGURE: 'setFigure',
	REMOVE_SHAPE: 'removeShape',
	CHANGE_SIZE: 'changeSize',
	RESET_SIZE: 'resetSize',
	CHANGE_SHAPE_INDEX: 'changeShapeIndex',
	CHANGE_SHAPE_OPTION: 'changeShapeOption'
};

export const actions = {
	LOAD_PROJECTS: 'loadProjects',
	LOAD_PROJECT: 'loadProject',
	CREATE_NEW_PROJECT: 'createNewProject',
	DELETE_PROJECT: 'deleteProject',
	CREATE_NEW_SHAPE: 'createNewShape',
	LOAD_SHAPES: 'loadShapes',
	DELETE_SHAPE: 'deleteShape'
};
