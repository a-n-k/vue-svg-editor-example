import {openDB} from 'idb'

const
		DB_NAME = 'svg-editor',
		PROJECTS = 'projects',
		SHAPES = 'shapes',
		PROJECT_INDEX = 'project',
		READ_WRITE = 'readwrite';

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
	projects: {
		async create(item) {
			return db.add(PROJECTS, item);
		},
		async readAll() {
			return db.getAll(PROJECTS);
		},
		async read(id) {
			return db.get(PROJECTS, id);
		},
		async update(project) {
			return db.put(PROJECTS, project);
		},
		async delete(id) {
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
		}
	},
	shapes: {
		async create(item) {
			return db.add(SHAPES, item);
		},
		async readAll(projectId) {
			return db.getAllFromIndex(SHAPES, PROJECT_INDEX, projectId);
		},
		async update(shape) {
			return db.put(SHAPES, shape);
		},
		async delete(id) {
			return db.delete(SHAPES, id);
		}
	}
}
