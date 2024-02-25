const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {messageModel} = require('./message');

sessionModel = new Schema({
    title: String,
    uid : String,
    messages : [messageModel],
    date : {
        type : Date,
        default : Date.now
    }
});

userSession = mongoose.model('session', sessionModel);
module.exports = userSession;
module.exports.sessionModel = sessionModel;