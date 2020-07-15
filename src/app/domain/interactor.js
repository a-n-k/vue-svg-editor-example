import {api} from '../repository/local';
import {project, shape} from './entity';
import shapesInfo from './shapes-info';

export default {
	shapeTypes() {
		return shapesInfo.types;
	},

	async loadProjects() {
		return await api.projects.readAll();
	},
	async loadProject(id) {
		return await api.projects.read(id);
	},
	async createProject(model) {
		const item = project.modify(model);
		item.id = await api.projects.create(item);
		return item;
	},
	async updateProject(project) {
		return await api.projects.update(project);
	},
	async deleteProject(id) {
		return await api.projects.delete(id);
	},

	async loadShapes(projectId) {
		return await api.shapes.readAll(projectId);
	},
	async createShape(info, projectId, lastIndex) {
		const item = shape.modify(info, projectId, lastIndex);
		item.id = await api.shapes.create(item);
		return item;
	},
	async updateShape(shape) {
		return await api.shapes.update(shape);
	},
	async deleteShape(id) {
		return await api.shapes.delete(id);
	}
}
