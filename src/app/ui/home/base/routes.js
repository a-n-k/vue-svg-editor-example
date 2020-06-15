import NotFound from '../pages/not-found'
import Welcome from '../pages/welcome'

export default [
	{
		path: '*',
		component: NotFound,
		meta: {
			title: 'Page not found'
		}
	},
	{
		path: '/',
		component: Welcome
	}
];
