var Education = require('../models/education');
// Handle a show one view with id specified by query
exports.education_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Education.findById( req.query.id)
    res.render('educationdetail',
    { title: 'Education Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
