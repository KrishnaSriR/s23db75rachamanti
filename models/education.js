const mongoose = require("mongoose")
const educationSchema = mongoose.Schema({
subject: String,
grade: {
    type: String,
    validate: {
        validator: function(value) {
            const validGrades = ['O','A', 'B', 'C', 'D', 'E', 'F'];
            return validGrades.includes(value.toUpperCase());
        },
        message: props => `${props.value} is not a valid grade. Please provide a grade that is either O/A/B/C/D/E/F.`
    }
},
marks: {
    type: Number,
    min: 0,  // Minimum allowed value
    max: 100,  // Maximum allowed value
}
})
module.exports = mongoose.model("education",educationSchema)

