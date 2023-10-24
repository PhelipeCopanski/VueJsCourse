<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Codigo: </strong>{{ id }}</p>
    <router-link
    tag="button"
    primario
    :to="{
      name: 'usuarioEditar',
      params: { id },
      query: { completo: true, lingua: 'pt'},
      hash: '#rodape'
      }" >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   $route(to) {
  //     this.id = to.params.id
  //   }
  // },
}
</script>

<style>

</style>