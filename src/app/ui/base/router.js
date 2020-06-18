import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoutes from '@/app/ui/home/base/routes'
import editorRoutes from '@/app/ui/editor/base/routes'

Vue.use(VueRouter);

const routes = homeRoutes.concat(editorRoutes);

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;