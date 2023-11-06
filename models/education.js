const mongoose = require("mongoose")
const educationSchema = mongoose.Schema({
subject: String,
grade: String,
})
module.exports = mongoose.model("education",educationSchema)

