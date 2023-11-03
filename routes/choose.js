var express = require('express');
var router = express.Router();

/* GET Choose page. */
router.get('/', function(req, res, next) {
  res.render('choose', { title: 'Choose' });
});

module.exports = router;
