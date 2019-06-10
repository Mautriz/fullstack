<template>
  <v-container grid-list-xs pa-0>
    <v-toolbar color="brown lighten-1">
      <v-toolbar-title class="subheading">{{title}}</v-toolbar-title>
    </v-toolbar>
    <div class="px-4 py-2">
      <slot>No content defined yet.</slot>
    </div>
  </v-container>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style lang="scss" scoped>

</style>
