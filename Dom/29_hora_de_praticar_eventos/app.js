new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Clicou no botão')
        },
        digitar(event) {
            this.valor = event.target.value
        }
    }
})