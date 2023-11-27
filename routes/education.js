var express = require('express');
const education_controlers= require('../controllers/education');
const detail_controllers=require('../controllers/detail');
const create_controllers=require('../controllers/create');
const update_controllers=require('../controllers/update');
const delete_controllers=require('../controllers/delete');

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
var router = express.Router();
/* GET Education */
    router.get('/', education_controlers.education_view_all_Page );

/* GET detail education page */
    router.get('/detail', detail_controllers.education_view_one_Page);

/* GET create education page */
    router.get('/create',secured, create_controllers.education_create_Page);

 /* GET  update education page */
    router.get('/update',secured, update_controllers.education_update_Page);
    
/* GET delete education page */
    router.get('/delete',secured, delete_controllers.education_delete_Page); 

    
module.exports = router;
