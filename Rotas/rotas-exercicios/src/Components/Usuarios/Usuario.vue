<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr>
    <router-view />
    <button sucesso @click="voltarParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    voltarParaInicio() {
      // this.$router.push('/')
      this.$router.push({ name: 'inicio'})
    }
  }
}
</script>

<style>

</style>