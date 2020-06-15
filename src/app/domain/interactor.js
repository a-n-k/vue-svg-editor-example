import {api} from '../repository/index';
import {project, shape} from './entity';

export default {
	newestProjectEntity() {
		return Object.assign({}, project.newest);
	},
	newestShapeEntity() {
		return Object.assign({}, shape.newest);
	},
	shapeTypes() {
		return shape.types;
	},

	async loadProjects() {
		const items = await api.getProjects();
		items.sort((a, b) => b.modified - a.modified);
		return items;
	},
	async loadProject(id) {
		const project = await api.getProject(id);
		if (!project) return null;

		return {
			project,
			shapes: await api.getShapes(id)
		};
	},
	async createProject(model) {
		const item = project.modify(model);
		item.id = await api.addProject(item);
		return item;
	},
	async updateProject(project) {
		project.modified = Date.now();
		return await api.modifyProject(project);
	},
	async deleteProject(id) {
		return await api.removeProject(id);
	},

	async createShape(model, projectId) {
		const item = shape.modify(model, projectId);
		item.id = await api.addShape(item);
		return item;
	},
	async updateShape(shape) {
		return await api.modifyShape(shape);
	},
	async deleteShape(id) {
		return await api.removeShape(id);
	}
}
