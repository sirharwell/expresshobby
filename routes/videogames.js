var express = require('express');
var router = express.Router();
var Videogame = require('../models').Videogame;
//
var Videogames = [
  { id: 1, title: 'Skyrim' },
  { id: 2, title: 'Minecraft' },
  { id: 3, title: 'Dota 2' }
]

// PUT /movies/7
router.put('/:id', function(req, res) {
  Videogame.update(
    { title: req.body.title },
    { where: { id: req.params.id }}
  )
    .then( function() {
      return res.redirect('/videogames')
    })
})

// GET /movies/7/edit
router.get('/:id/edit', function(req, res) {
  Videogame.findById(req.params.id)
    .then( function(videogame) {
      return res.render('edit', { videogame: videogame })
    })
})

//  DELETE /movies/7
router.delete('/:id', function(req, res) {
  Videogame.findById(req.params.id)
    .then( function(movie) { videogame.destroy() })
    .then( function() { return res.redirect('/videogames') })

})

// GET /movies
router.get('/', function(req, res) {
  Videogame.all()
    .then( function(videogames) {
      res.render('videogames', { videogames: videogames })
    })
})

// POST /movies
router.post('/', function(req, res) {
  var title = req.body.title
  Videogame.create({ title: title })
    .then( function() {
      res.redirect('/videogames')
    })
})
module.exports = router;
