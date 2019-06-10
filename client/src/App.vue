<template>
  <v-app class="grey lighten-4">
    <Header fixed ></Header>
    <v-content fluid>
      <router-view></router-view>
    </v-content>
  </v-app>

</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  data    () {
    return {
      //
    }
  },
  components: {
    Header
  }
}
</script>

<style>
* {
  box-sizing: border-box
}
</style>
