import Vue from 'vue'
import Axios from 'axios'

Axios.defaults.baseURL = 'https://curso-vue-4ca45-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = Axios
    }
})