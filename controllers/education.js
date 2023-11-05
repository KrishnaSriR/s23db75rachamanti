var Education = require('../models/education');
// List of all Education objects
exports.education_list = function(req, res) {
res.send('NOT IMPLEMENTED: Education list');
};
// for a specific Education.
exports.education_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Education detail: ' + req.params.id);
};
// Handle Education create on POST.
exports.education_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Education create POST');
};
// Handle Education delete form on DELETE.
exports.education_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Education delete DELETE ' + req.params.id);
};
// Handle Education update form on PUT.
exports.education_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Education update PUT' + req.params.id);
};
