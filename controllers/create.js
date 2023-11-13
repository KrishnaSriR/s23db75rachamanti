var Education = require('../models/education');

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.education_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('educationcreate', { title: 'Education Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    