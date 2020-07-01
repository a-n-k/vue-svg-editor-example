import {api} from '../repository/local';
import {project, shape} from './entity';
import {byNumberValue} from '@/lib/modules/predicates';

export default {
	newestProjectEntity() {
		return Object.assign({}, project.newest);
	},
// 	newestShapeEntity() {
// 		return Object.assign({}, shape.newest);
// 	},
// 	shapeTypes() {
// 		return shape.types;
// 	},

	async loadProjects() {
		const items = await api.projects.readAll();
		items.sort(byNumberValue('modified', -1));
		return items;
	},
	async loadProject(id) {
		const project = await api.projects.read(id);
		if (!project) return null;

		const shapes = await this.loadShapes(id);
		return {project, shapes};
	},
	async createProject(model) {
		const item = project.modify(model);
		item.id = await api.projects.create(item);
		return item;
	},
// 	async updateProject(project) {
// 		project.modified = Date.now();
// 		return await api.modifyProject(project);
// 	},
// 	async deleteProject(id) {
// 		return await api.removeProject(id);
// 	},

	async loadShapes(projectId) {
		const shapes = await api.shapes.readAll(projectId);
		return shapes.sort(byNumberValue('index'));
	},
// 	async createShape(model, projectId) {
// 		const item = shape.modify(model, projectId);
// 		item.id = await api.addShape(item);
// 		return item;
// 	},
// 	async updateShape(shape) {
// 		return await api.modifyShape(shape);
// 	},
// 	async deleteShape(id) {
// 		return await api.removeShape(id);
// 	}
}
