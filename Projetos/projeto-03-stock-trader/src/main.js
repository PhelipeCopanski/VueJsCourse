import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './plugins/axios'

Vue.config.productionTip = false

Vue.filter('currency', function(valor) {
	return 'R$ ' + valor.toLocaleString()
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
