var express = require('express');
const education_controlers= require('../controllers/education');
const detail_controllers=require('../controllers/detail');
const create_controllers=require('../controllers/create');
const update_controllers=require('../controllers/update');
const delete_controllers=require('../controllers/delete');


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
/* GET create education page */
try{
    router.get('/create', create_controllers.education_create_Page);
}
catch(err){
        console.error();
 }
 /* GET  update education page */
 try{
    router.get('/update', update_controllers.education_update_Page); 
}
catch(err){
       console.error();
}
/* GET delete education page */
try{
    router.get('/delete', delete_controllers.education_delete_Page); 
}
catch(err){
       console.error();
}
    
module.exports = router;
