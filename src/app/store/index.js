import Vue from 'vue';
import Vuex from 'vuex';
import state from '@/app/store/state';
import mutations from '@/app/store/mutations';
import actions from '@/app/store/actions';

Vue.use(Vuex);

let strict = true;
if (process.env.NODE_ENV === 'production') {
	strict = false;
}

export default new Vuex.Store({
	strict, state, mutations, actions
});