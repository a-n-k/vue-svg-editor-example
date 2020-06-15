import Projects from '../pages/projects';
import Project from '../pages/project';

export default [
	{
		path: '/projects',
		component: Projects,
		meta: {
			title: 'Projects'
		}
	},
	{
		path: '/project/:id',
		component: Project
	}
];
