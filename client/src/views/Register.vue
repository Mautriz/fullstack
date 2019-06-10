<template>
<v-container app fluid full-width>
  <v-layout wrap fluid elevation-1>
      <v-toolbar color="brown lighten-1">
        <v-toolbar-title>REGISTER</v-toolbar-title>
      </v-toolbar>
      <v-flex xs10 px-3 mt-2>
        <v-text-field
        name="email"
        type="email"
        placeholder="E-mail"
        v-model="email">
        </v-text-field>
      </v-flex>
      <v-flex xs10 px-3>
        <v-text-field
        name="password"
        type="password"
        placeholder="Password"
        v-model="password">
        </v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-toolbar flat my-0 py-0>
          <v-spacer></v-spacer>
          <v-btn flat @click="register"> Register </v-btn>
        </v-toolbar>

      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response, this.email, this.password)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red
}
</style>
