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
		div.frame
			div.column
				list
			div.column.clm-center
				//preview(
					//:shapes="shapes" :size="size" :needSave="isChanged"
					//@change="onSizeChanged" @remove="onProjectRemove"
					//@save="onSaveAll"
				//)
			div.column
				//setting(
					//:figure="figure" :original="shapeOriginal"
					//:needSave="isChanged"
					//@change="onShapeChanged"
				//)
	div.empty-msg(v-else)
		p Project not exists
		p.link
			router-link(to="/projects") Please visit to projects page
</template>

<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex';
	import {getters, actions, mutations} from '@/app/store/types';
	import Toolbar from './toolbar';
	import List from './list';
	// import Preview from './preview/index';
	// import Setting from './setting/index';

	const
			MSG_DELETE_PROJECT = 'Are you sure want to delete the project?',
			CURRENT_INFO = getters.CURRENT_INFO,
			LOAD_PROJECT = actions.LOAD_PROJECT,
			DELETE_PROJECT = actions.DELETE_PROJECT;


	// const shapeUtils = {
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
		components: {Toolbar, List /*, Preview, Setting */},
		// data() {
		// 	return {
		// 		project: null, shapes: [], figure: null,
		// 		isChanged: false
		// 	};
		// },
		computed: {
			...mapGetters([CURRENT_INFO]),
			project() {
				const current = this[CURRENT_INFO].project;
				return (current && current.value);
			}
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
				LOAD_PROJECT, DELETE_PROJECT
			]),


			// async onShapeRemove() {
			// 	const shapeId = this.figure.id;
			// 	await interactor.deleteShape(shapeId);
			// 	shapeUtils.remove(shapeId, this.shapes);
			// 	this.isChanged = changesManager.isChanged();
			// 	this.figure = null;
			// },
			async onProjectRemove() {
				if (!confirm(MSG_DELETE_PROJECT)) return;
				await this[DELETE_PROJECT]();
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
			await this[LOAD_PROJECT](projectId);
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
		padding-bottom: $padding;
		border-bottom: $border;

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
		min-height: 500px;
		display: flex;
		padding: $padding 0 0 0;
	}

	.column {
		display: inline-flex;
		flex: 1;
		min-width: 100px;
		overflow: scroll;
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