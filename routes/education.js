var express = require('express');
var router = express.Router();

/* GET Education page. */
router.get('/', function(req, res, next) {
  res.render('education', { title: 'Search Results Education' });
});

module.exports = router;
