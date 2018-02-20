var express = require('express');
var router = express.Router();
var videogames = require('../models').videogames;

var videogames = [
  { id: 1, title: 'Skyrim' },
  { id: 2, title: 'Minecraft' },
  { id: 3, title: 'Dota 2' }
]

/* GET movie listings. */
router.get('/', function(req, res) {
  videogames.all({
    order: [
      ['createdAt', 'ASC']
    ]
  })
    .then( function(videogames) {
      return res.render('videogames', { videogames: videogames});
    })
  res.render('videogames', { videogames: videogames });
});

router.post('/', function(req, res) {
  var title = req.body.title;
  videogames.create({ title: title })
    .then( function() {
      res.redirect('/videogames');
    })
  });

      router.delete('/:id', function(req, res) {
  videogames.findById(req.params.id)
    .then( function(movie) {
      videogames.destroy()
    })
    .then( function() {
      return res.redirect('/movies');
})
});
      router.get('/:id/edit', function(req, res) {
  videogames.findById(req.params.id)
    .then( function(videogames) {
      return res.render('edit', { videogames: videogames });
      })
    });

      router.put('/:id', function(req, res) {
  videogames.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/videogames');
  })
});

module.exports = router;
