<template>
  <v-container>
    <v-layout fluid dense wrap>
      <v-flex column xs8 offset-xs2 elevation-1>
        <Panel title="Hello World">
          <div v-for="song in songs" :key="song.title">
            {{ song.title }}
            {{ song.artist }}
            {{ song.album }}
          </div>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from '../components/Panel.vue'
import SongService from '../services/SongService.js'
export default {
  data () {
    return {
      songs: []
    }
  },
  components: {
    Panel
  },
  async mounted () {
    this.songs = (await SongService.index()).data
  }
}
</script>

<style lang="scss" scoped>

</style>
