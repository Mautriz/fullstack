const { Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (error) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the songs'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (error) {
      res.status(500).send({
        error: 'An error as occurred trying to create the song'
      })
    }
  }
}
