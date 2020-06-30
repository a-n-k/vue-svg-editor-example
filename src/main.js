import Vue from 'vue'
import Root from '@/app/ui/base/root'
import router from '@/app/ui/base/router'
import store from '@/app/store';
import {localDB} from '@/app/repository/local';

Vue.config.productionTip = false;

const options = {router, store},
		root = new Vue(Object.assign(Root, options));

function start(dbName) {
	return localDB.open(dbName).then(() => {
		root.$mount('#app');
	});
}

if (process.env.VUE_APP_TEST === 'e2e') {
	start('svg-editor-test').then(() => {
		window.vueApp = {root, clearDB: localDB.clear};
	});
} else {
	start();
}
