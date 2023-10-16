import Vue from 'vue';
export default new Vue({
    methods: {
        enviarUsuario(usuario) {
            this.$emit('usuarioMudou', usuario)
        },
        usuarioRecebido(callback) {
            this.$on('usuarioMudou', callback)
        }
    }
})