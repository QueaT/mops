const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    nick: {
        type: String,
    },
    password:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('User', userSchema) 