const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {sessionModel} = require('./session');

userModel = new Schema({
    name: String,
    email: String,
    password : String,
    sessions : [sessionModel],
    date : {
        type : Date,
        default : Date.now
    }
});

User = mongoose.model('user', userModel);
module.exports = User;