<template>
<v-layout>
  <v-flex>
    <div class="white elevation-2">
      <v-toolbar>
        <v-toolbar-title>Header</v-toolbar-title>
      </v-toolbar>
       <div>

    <input type="email" name="email" placeholder="email" v-model="email">
    <br>
    <input
    type="password"
    name="password"
    placeholder="password"
    v-model="password">
    <br>
    <div v-html="error" class="error"/>
    <button @click="register">
      Register
    </button>
  </div>
    </div>
  </v-flex>
</v-layout>

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
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
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
