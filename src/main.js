/*
 * @Descripttion: santana
 * @LastEditTime: 2022-02-25 15:13:49
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
