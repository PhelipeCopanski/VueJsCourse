<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é: <strong>{{ name }}</strong></p>
        <p>Idade do usuario: <strong>{{ idade }}</strong></p>
        <button @click="alterarNome">Alterar nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info
            :name="name"
            :idade="idade"
            @nomeMudou="name = $event"
            :reiniciarFn="reiniciarNome" />
            <app-usuario-editar
            :idade="idade" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            name: 'Testerson',
            idade: 21
        }
    },
    methods: {
        alterarNome() {
            this.name = 'Ana'
        },
        reiniciarNome() {
            this.name = 'Testerson'
        },
        //alterarIdade() {
        //    this.idade = 33
        //}
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
