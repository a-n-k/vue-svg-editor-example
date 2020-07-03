import {api} from '../repository/local';
import {project, shape} from './entity';
import shapesInfo from './shapes-info';
import {byNumberValue} from '@/lib/modules/predicates';

export default {
	newestProjectEntity() {
		return Object.assign({}, project.newest);
	},
	shapeTypes() {
		return shapesInfo.types;
	},

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
	async deleteProject(id) {
		return await api.projects.delete(id);
	},

	async loadShapes(projectId) {
		const shapes = await api.shapes.readAll(projectId);
		return shapes.sort(byNumberValue('index'));
	},
	async createShape(info, projectId, shapesLength) {
		const item = shape.modify(info, projectId, shapesLength);
		item.id = await api.shapes.create(item);
		return item;
	},
// 	async updateShape(shape) {
// 		return await api.modifyShape(shape);
// 	},
// 	async deleteShape(id) {
// 		return await api.removeShape(id);
// 	}
}
