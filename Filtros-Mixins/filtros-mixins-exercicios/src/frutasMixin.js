export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maça', 'laranja', 'morando']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}