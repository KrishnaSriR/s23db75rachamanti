const mongoose = require("mongoose")
const educationSchema = mongoose.Schema({
subject: String,
grade: String,
marks: {
    type: Number,
    min: 0,  // Minimum allowed value
    max: 100,  // Maximum allowed value
}
})
module.exports = mongoose.model("education",educationSchema)

