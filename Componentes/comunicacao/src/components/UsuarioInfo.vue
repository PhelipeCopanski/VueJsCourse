<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usuario: <strong>{{ age }}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn">Reiniciar nome (callback)</button>
    </div>
</template>

<script>
import Barramento from '@/barramento'

export default {
    data(){
        return {
            age: this.idade
        }
    },
    props: {
        name: {
            type: String,
            required: true,
            default: 'Anônimo'
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.name.split('').reverse().join('')
        },
        reiniciarNome() {
            this.$emit('nomeMudou', 'Testerson')
        }
    },
    created() {
        Barramento.quandoIdadeMudar(idade => {
            this.age = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
