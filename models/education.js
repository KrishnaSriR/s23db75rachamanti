const mongoose = require("mongoose")
const educationSchema = mongoose.Schema({
subject: String,
grade: String,
marks: Number
})
module.exports = mongoose.model("education",educationSchema)

