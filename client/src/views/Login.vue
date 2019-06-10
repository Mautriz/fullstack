<template>
<v-container app>
  <v-layout full-width fluid  column elevation-1>
      <v-toolbar color="brown lighten-1">
        <v-toolbar-title>LOGIN</v-toolbar-title>
      </v-toolbar>
      <v-flex px-3 mt-2>
        <v-text-field
        name="email"
        type="email"
        placeholder="E-mail"
        v-model="email">
        </v-text-field>
      </v-flex>
      <v-flex px-3>
        <v-text-field
        name="password"
        type="password"
        placeholder="Password"
        v-model="password">
        </v-text-field>
      </v-flex>
      <v-flex>
        <v-toolbar flat my-0 py-0>
          <v-spacer></v-spacer>
          <v-btn flat @click="login"> Login </v-btn>
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
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
