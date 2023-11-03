var express = require('express');
var router = express.Router();
function calculateCellValue(row, col) {
    if (row === col) {
      return 1;
    } else if (row === col + 1) {
      return 2;
    } else if (row === col - 1) {
      return row;
    } else {
      return 0;
    }
  }
/* GET Board page. */
router.get('/', function(req, res, next) {
    let query = req.query
    console.log(`rows ${query.rows}`)
    console.log(`cols ${query.cols}`)
  res.render('board', { title: 'Board Display' , query: query,calculateCellValue});
});

module.exports = router;
