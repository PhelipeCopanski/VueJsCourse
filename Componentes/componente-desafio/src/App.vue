<template>
  <v-app>
    <app-navigation />
    <app-header />
    <app-content />
    <app-footer />
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'app-navigation': Navigation,
    'app-header': Header,
    'app-content': Content,
    'app-footer': Footer
  }
}
</script>