<template>
<div>
  <v-container fluid>
    <v-layout row wrap fill-height>
      <v-flex xs3 md6 v-for="item in router" :key="item.name">
        <v-btn flat outline color="pink" router :to="item.to">{{ item.name }}</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>

export default {
  data () {
    return {
      router: [
        { name: 'Franco', to: '/register' },
        { name: 'Beppe', to: '/beppe' },
        { name: 'Gioacchino', to: '/gioacchino' },
        { name: 'Tamburiello', to: '/tamburiello' }
      ]
    }
  }
}
</script>
