<template lang="pug">
	div.project(v-if="project")
		div.header.flex-v-center
			div.flex-r-inline.tb-trash
				span.icon.trash(title="Delete Project"
					@click.prevent="onProjectRemove"
				)
			div.flex-l-inline
				router-link(to="/") home
				span.icon.sep.arrow
				router-link(to="/projects") projects
				span.icon.sep.arrow
				span.name {{project.name}}
		toolbar


	//	div.frame
				div.column
					list(
					:shapes="shapes" :figure="figure"
						:newShape="newShape" :types="shapeTypes"
						@change="onShapeSelected"
						@type="onShapeType" @remove="onShapeRemove"
					)
					div.column.clm-center
						preview(
							:shapes="shapes" :size="size" :needSave="isChanged"
							@change="onSizeChanged" @remove="onProjectRemove"
							@save="onSaveAll"
						)
				div.column
					setting(
						:figure="figure" :original="shapeOriginal"
						:needSave="isChanged"
						@change="onShapeChanged"
					)onShapeChanged
	div.empty-msg(v-else)
		p Project not exists
		p.link
			router-link(to="/projects") Please visit to projects page
</template>

<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex';
	import {getters, actions, mutations} from '@/app/store/types';
	import Toolbar from './toolbar';
	// import List from './list/index';
	// import Preview from './preview/index';
	// import Setting from './setting/index';
	
	const MSG_DELETE_PROJECT = 'Are you sure want to delete the project?';


	// let originalShapes = [];
	//
	// const changesManager = {
	// 	size: null, shapes: [],
	// 	isChanged() {
	// 		return !!(this.size || this.shapes.length);
	// 	},
	// 	reset() {
	// 		this.size = null;
	// 		this.shapes.length = 0;
	// 	}
	// };

	// const shapeUtils = {
	// 	INDEX_STEP: 5,
	// 	compare: (a, b) => a.index - b.index,
	// 	by(id) {
	// 		return (val) => val.id === id;
	// 	},
	// 	remove(id, copyShapes) {
	// 		const by = this.by;
	//
	// 		let index = originalShapes.findIndex(by(id));
	// 		originalShapes.splice(index, 1);
	//
	// 		index = copyShapes.findIndex(by(id));
	// 		copyShapes.splice(index, 1);
	//
	// 		index = changesManager.shapes.findIndex(by(id));
	// 		if (index >= 0) {
	// 			changesManager.shapes.splice(index, 1);
	// 		}
	// 	}
	// };

	export default {
		name: "project",
		components: {Toolbar /* , List, Preview, Setting */},
		// data() {
		// 	return {
		// 		project: null, shapes: [], figure: null,
		// 		isChanged: false
		// 	};
		// },
		computed: {
			...mapGetters([
				getters.CURRENT_PROJECT
			]),
			project() {
				const current = this[getters.CURRENT_PROJECT];
				return (current && current.value);
			}
			// shapeTypes() {
			// 	return interactor.shapeTypes();
			// },
			// shapeOriginal() {
			// 	const figure = this.figure;
			// 	return figure ? originalShapes.find(shapeUtils.by(figure.id)) : null;
			// },
			// size() {
			// 	const project = this.project;
			// 	return project ? project.size : {};
			// }
		},
		methods: {
			...mapActions([
				actions.LOAD_PROJECT, actions.DELETE_PROJECT
			]),

			// newShape() {
			// 	return interactor.newestShapeEntity();
			// },
			// onShapeSelected(item) {
			// 	this.figure = item;
			// },
			// async onShapeType(model) {
			// 	const data = this.$data,
			// 			shapes = data.shapes;
			// 	model.index = (shapes.length + 1) * shapeUtils.INDEX_STEP;
			// 	const shape = await interactor.createShape(model, data.project.id);
			// 	originalShapes.push(shape);
			//
			// 	const copyShape = utils.deepClone(shape);
			// 	shapes.push(copyShape);
			// 	data.figure = copyShape;
			// },
			// async onShapeRemove() {
			// 	const shapeId = this.figure.id;
			// 	await interactor.deleteShape(shapeId);
			// 	shapeUtils.remove(shapeId, this.shapes);
			// 	this.isChanged = changesManager.isChanged();
			// 	this.figure = null;
			// },
			async onProjectRemove() {
				if (!confirm(MSG_DELETE_PROJECT)) return;
				await this[actions.DELETE_PROJECT]();
				this.$router.push('/projects');
			},
			// onSizeChanged(info) {
			// 	changesManager.size = info.value ? info.size : null;
			// 	this.isChanged = changesManager.isChanged();
			// },
			// onShapeChanged(info) {
			// 	changesManager.shapes = info.shapes;
			// 	this.isChanged = changesManager.isChanged();
			// },
			// 	async onSaveAll() {
			// 		const {size, shapes} = changesManager;
			//
			// 		if (size) {
			// 			const project = this.project;
			// 			project.size = Object.assign({}, size);
			// 			await interactor.updateProject(project);
			// 		}
			//
			// 		const length = shapes.length;
			// 		if (length) {
			// 			for (let i = 0; i < length; i++) {
			// 				await interactor.updateShape(shapes[i]);
			// 			}
			// 		}
			// 		originalShapes = utils.deepClone(this.shapes);
			//
			// 		changesManager.reset();
			// 		this.isChanged = false;
			// 	}
		},
		async created() {
			const projectId = Number(this.$route.params.id);
			await this[actions.LOAD_PROJECT](projectId);
		},
		watch: {
			project(value) {
				this.$root.setTitle(value && value.name);
			},
			// 'figure.index'() {
			// 	this.shapes.sort(shapeUtils.compare);
			// }
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/app/ui/base/scss/index.scss";

	.header {
		font-style: italic;

		.name {
			color: green;
			font-weight: bold;
			font-size: 16px;
		}

		.sep {
			width: 9px;
			height: 9px;
			margin: 5px 10px;
		}

		.tb-trash {
			margin: 0 20px 0 0;
		}
	}

	.frame {
		border-top: $border;
		height: 100%;
		display: flex;
		padding: $padding 0 0 0;
	}

	.column {
		display: inline-flex;
		flex: 1;
		min-width: 100px;
	}

	.clm-center {
		flex: 3;
		border-left: $border;
		border-right: $border;
	}

	.empty-msg {
		.link {
			margin: 50px 0 0 0;
			font-weight: normal;
		}
	}
</style>