var express = require('express');
const education_controlers= require('../controllers/education');
var router = express.Router();
/* GET Education */
try{
router.get('/', education_controlers.education_view_all_Page );
}
catch(err){
console.error();
}
module.exports = router;
