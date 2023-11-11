var express = require('express');
const education_controlers= require('../controllers/education');
const detail_controllers=require('../controllers/detail');
var router = express.Router();
/* GET Education */
try{
router.get('/', education_controlers.education_view_all_Page );
}
catch(err){
console.error();
}
/* GET detail education page */
try{
    router.get('/detail', detail_controllers.education_view_one_Page);
 }
catch(err){
    console.error();
}

module.exports = router;
