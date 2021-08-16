const mongoose = require('mongoose');

const AddSomethingTemplate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('something', AddSomethingTemplate);