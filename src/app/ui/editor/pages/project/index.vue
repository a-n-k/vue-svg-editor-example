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
				preview
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
	import Preview from './preview';
	// import Setting from './setting/index';

	const
			MSG_DELETE_PROJECT = 'Are you sure want to delete the project?',
			{CURRENT_INFO} = getters,
			{LOAD_PROJECT, DELETE_PROJECT} = actions;

	export default {
		name: "project",
		components: {Toolbar, List, Preview /*, Setting */},
		computed: {
			...mapGetters([CURRENT_INFO]),
			project() {
				const current = this[CURRENT_INFO].project;
				return (current && current.value);
			}
		},
		methods: {
			...mapActions([
				LOAD_PROJECT, DELETE_PROJECT
			]),
			async onProjectRemove() {
				if (!confirm(MSG_DELETE_PROJECT)) return;
				await this[DELETE_PROJECT]();
				this.$router.push('/projects');
			},
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
		justify-content: center;
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