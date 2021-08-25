
const mongoose = require('mongoose');

const InvoiceTemplate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   contact: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    items: {
        type: String,
        required: true
    }, 
    price: {
        type: Double,
        required: true
    },
   quantity: {
        type: Integer,
        required: true
    },
    total:{
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('invoice', InvoiceTemplate);
