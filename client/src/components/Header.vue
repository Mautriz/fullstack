<template>
  <nav>
    <v-toolbar color="brown lighten-1" app >
      <v-toolbar-side-icon class="brown--text text--darken-4" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase brown--text text--darken-4">
        <span class="font-weight-light">mautrix's </span>
        <span> APP</span>
      </v-toolbar-title>

      <v-btn v-if="this.$store.state.isUserLoggedIn" flat elevate-1 router to="/songs">SONGS</v-btn>
      <v-spacer></v-spacer>

      <v-btn v-if="!this.$store.state.isUserLoggedIn" flat elevate-1 router to="/register">REGISTER</v-btn>
      <v-btn v-if="!this.$store.state.isUserLoggedIn" flat elevate-1 router to="/login">LOGIN</v-btn>
      <v-btn v-if="this.$store.state.isUserLoggedIn" flat elevate-1 router to="/login" @click="logout">LOGOUT</v-btn>

    </v-toolbar>

  </nav>
</template>

<script>
export default {
  data () {
    return {
      router: [
        { name: 'REGISTER', icon: '', to: '/register', show: !this.$store.state.isUserLoggedIn },
        { name: 'LOGIN', icon: '', to: '/login', show: !this.$store.state.isUserLoggedIn },
        { name: 'SONGS', icon: '', to: '/songs', show: this.$store.state.isUserLoggedIn },
        { name: 'LOGOUT', icon: '', to: '/login', show: this.$store.state.isUserLoggedIn }
      ],
      drawer: false
    }
  },
  methods: {
    logout () {
      console.log('ciao')
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>
