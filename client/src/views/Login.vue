<template>

    <div class="white elevation-2">
      <h1>Header</h1>
        <div>
          <input type="email" name="email" placeholder="email" v-model="email">
          <br>
          <input type="password" name="password" placeholder="password" v-model="password">
          <br>
          <div v-html="error" class="error"/>
          <v-btn @click="login"> Login </v-btn>
        </div>
    </div>

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
        await AuthenticationService.login({
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
