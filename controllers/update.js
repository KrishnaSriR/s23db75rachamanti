var Education = require('../models/education');
// Handle building the view for updating a education.
// query provides the id
exports.education_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await Education.findById(req.query.id)
res.render('educationupdate', { title: 'Education Update', toShow: result });
}
catch(err){
res.status(500)
console.log(err);
res.send(`{'error': '${err}'}`);
}
};