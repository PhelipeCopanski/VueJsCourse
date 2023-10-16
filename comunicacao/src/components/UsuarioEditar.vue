<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuario: <strong>{{ age }}</strong></p>
        <button @click="alterarIdade">Alterar idade</button>
    </div>
</template>

<script>
import Barramento from '@/barramento'

export default {
    data() {
        return {
            age: this.idade
        }
    },
    props: ['idade'],
    methods: {
        alterarIdade() {
            this.age += 1
            Barramento.alterarIdade(this.age)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
