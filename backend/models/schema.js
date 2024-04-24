const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    slots: {
        type: String,
        required: true
    },
    specialisation: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    disease: {
        type: String,
        required: true
    },
    preference: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Doctor', doctorSchema)