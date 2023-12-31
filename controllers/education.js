var Education = require('../models/education');
// List of all Education objects
exports.education_list = function(req, res) {
res.send('NOT IMPLEMENTED: Education list');
};
// for a specific Education.
exports.education_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Education.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
}};
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
    document.marks=req.body.marks;
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
exports.education_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Education.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle Education update form on PUT.
exports.education_update_put = async function(req, res) {
        console.log(`update on id ${req.params.id} with body
        ${JSON.stringify(req.body)}`)
        try {
        let toUpdate = await Education.findById( req.params.id)
        // Do updates of properties
        if(req.body.subject) toUpdate.subject = req.body.subject;
        if(req.body.grade) toUpdate.grade = req.body.grade;
        if(req.body.marks) toUpdate.marks = req.body.marks;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }};

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
    


