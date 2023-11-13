var Education = require('../models/education');

// Handle a delete one view with id from query
exports.education_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Education.findById(req.query.id)
    res.render('educationdelete', { title: 'Education Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };