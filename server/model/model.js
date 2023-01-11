const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    cardNumber: {
        required: true,
        type: String
    },
    limit: {
        required: true,
        type: Number,        
    },
    balance: {
        required: false,
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Accounts', accountSchema)