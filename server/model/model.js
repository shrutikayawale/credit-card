const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        required: true,
    },
    cardNumber: {
        required: true,
        type: String,
        required: true,
        unique: true,
    },
    limit: {
        required: true,
        type: Number,
        required: true,    
    },
    balance: {
        required: false,
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Accounts', accountSchema)