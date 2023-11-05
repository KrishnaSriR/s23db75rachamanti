var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var education_controller = require('../controllers/education');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Education ROUTES ///
// POST request for creating a Education object.
router.post('/education', education_controller.education_create_post);
// DELETE request to delete education.
router.delete('/education/:id', education_controller.education_delete);
// PUT request to update education.
router.put('/education/:id', education_controller.education_update_put);
// GET request for one education.
router.get('/education/:id', education_controller.education_detail);
// GET request for list of all education items.
router.get('/education', education_controller.education_list);
module.exports = router;
