<template lang="pug">
	div
		div.list
			div.empty-msg(v-if="!projects.length")
				p Projects not exists
			div.items(v-else)
				router-link.rr-link(
					v-for="pt in projects", :key="pt.id"
					tag="div", :to="link(pt.id)"
				)
					div.item
						div.project-icon
						div.name
							div.value {{pt.name}}
		hr
		div.new-project
			form(@submit.prevent="newProject")
				div.clm
					input.ipt(
						type="text" placeholder="Project Name"
						v-model.lazy.trim="model.name"
						required pattern="[A-Za-z0-9 ]{3,50}"
						title="Only letters, numbers and spaces. Length is min:3, max:50"
					)
				div.clm
					button.btn(type="submit") Create New Project
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';
	import {getters, actions} from '@/app/store/types';

	const BASE_LINK = '/project/',
			LOAD_PROJECTS = actions.LOAD_PROJECTS,
			CREATE_NEW_PROJECT = actions.CREATE_NEW_PROJECT;

	export default {
		name: "projects",
		data() {
			return {model: {name: ''}};
		},
		computed: {
			...mapGetters([getters.PROJECTS])
		},
		methods: {
			...mapActions([
				LOAD_PROJECTS, CREATE_NEW_PROJECT
			]),
			link(id) {
				return BASE_LINK + id;
			},
			async newProject() {
				await this[CREATE_NEW_PROJECT](this.model);
				this.model.name = '';
			}
		},
		async created() {
			await this[LOAD_PROJECTS]();
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/app/ui/base/scss/index.scss";

	.list {
		padding: $padding;
		display: flex;
		justify-content: center;
	}

	.rr-link {
		display: inline-block;
		margin: 0 10px 0 0;
	}

	$i-size: 130px;
	$bg-size: 150px;

	.item {
		border: $border;
		border-radius: 20px;
		padding: $padding;
		width: $bg-size;
	}

	.item:hover {
		background-color: #dddddd;
		cursor: pointer;
	}

	.project-icon {
		width: $i-size;
		height: $i-size;
		background: url(~@/app/ui/editor/pages/projects/project.png) center;
		background-size: $bg-size;
	}

	.name {
		background-color: white;
		padding: $padding;
		text-align: center;
	}

	.value {
		height: 50px;
		overflow: hidden;
	}

	hr {
		border: $border;
		margin: 15px 0 25px 0;
	}

	$font-size: 18px;

	.new-project {
		margin-bottom: 15px;
		text-align: center;
	}

	.clm {
		display: inline-block;
		margin: 0 10px 0 0;
	}

	.ipt {
		width: 400px;
		font-size: $font-size;
		@include box();
	}

	.btn {
		width: 200px;
		border-radius: $br-radius;
		font-weight: bold;
		font-size: $font-size;
		height: 40px;
		cursor: pointer;
		background-color: green;
		color: white;
	}
</style>