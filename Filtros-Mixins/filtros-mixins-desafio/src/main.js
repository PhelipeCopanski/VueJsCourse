import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contaPalavra', function(valor) {
	return valor.split(' ').map(e => `${e} (${e.length})`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
