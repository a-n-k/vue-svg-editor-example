import {openDB} from 'idb'

const
		READ_WRITE = 'readwrite',
		DB_NAME = 'svg-editor',
		PROJECTS = 'projects',
		SHAPES = 'shapes',
		PROJECT_INDEX = 'project';

let db;

export const localDB = {
	async open(dbName = DB_NAME) {
		db = await openDB(dbName, 1, {
			upgrade(idb) {
				const options = {
					keyPath: 'id', autoIncrement: true,
				};

				idb.createObjectStore(PROJECTS, options);

				idb.createObjectStore(SHAPES, options)
						.createIndex(PROJECT_INDEX, 'projectId');
			}
		});
	},
	async clear() {
		const tx = db.transaction([PROJECTS, SHAPES], READ_WRITE),
				projects = tx.objectStore(PROJECTS),
				shapes = tx.objectStore(SHAPES);

		await Promise.all([
			shapes.clear(),
			projects.clear(),
			tx.done
		]);
	}
};

export const api = {
	/**
	 * @returns {Promise<Array>}
	 */
	async getProjects() {
		return db.getAll(PROJECTS);
	},

	/**
	 * @returns {Promise<Object>}
	 */
	async getProject(id) {
		return db.get(PROJECTS, id);
	},

	/**
	 * @returns {Promise<Number>}
	 */
	async addProject(item) {
		return db.add(PROJECTS, item);
	},

	/**
	 * @returns {Promise<void>}
	 */
	async modifyProject(project) {
		return db.put(PROJECTS, project);
	},

	/**
	 * @returns {Promise<void>}
	 */
	async removeProject(id) {
		const tx = db.transaction([PROJECTS, SHAPES], READ_WRITE),
				projects = tx.objectStore(PROJECTS),
				shapes = tx.objectStore(SHAPES);

		async function removeAllShapesOfProject() {
			let cursor = await shapes.index(PROJECT_INDEX).openCursor(id);
			while (cursor) {
				await cursor.delete();
				cursor = await cursor.continue();
			}
		}

		await Promise.all([
			removeAllShapesOfProject(),
			projects.delete(id),
			tx.done
		]);
	},

	/**
	 * @returns {Promise<Array>}
	 */
	async getShapes(projectId) {
		return db.getAllFromIndex(SHAPES, PROJECT_INDEX, projectId);
	},

	/**
	 * @returns {Promise<Number>}
	 */
	async addShape(item) {
		return db.add(SHAPES, item);
	},

	/**
	 * @returns {Promise<void>}
	 */
	async modifyShape(shape) {
		return db.put(SHAPES, shape);
	},

	/**
	 * @returns {Promise<void>}
	 */
	async removeShape(id) {
		return db.delete(SHAPES, id);
	}
}