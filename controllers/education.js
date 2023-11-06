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
exports.education_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Education();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"subject":"Maths", "garde":"A"}
    document.subject = req.body.subject;
    document.grade = req.body.grade;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle Education delete form on DELETE.
exports.education_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Education delete DELETE ' + req.params.id);
};
// Handle Education update form on PUT.
exports.education_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Education update PUT' + req.params.id);
};

// List of all Education objects
exports.education_list = async function(req, res) {
try{
theEducationObjs = await Education.find();
res.send(theEducationObjs);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// VIEWS
// Handle a show all view
exports.education_view_all_Page = async function(req, res) {
    try{
        theEducationObjs = await Education.find();
        console.log("objs:  "+theEducationObjs);
    res.render('education', { title: 'Education Search Results', Educationlist: theEducationObjs });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    


