import Vue from 'vue'
import Root from '@/app/ui/base/root'
import router from '@/app/ui/base/router'
import {localDB} from '@/app/repository';

Vue.config.productionTip = false;

const options = {router},
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
