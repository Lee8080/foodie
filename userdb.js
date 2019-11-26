var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name : String,
    email : String
})

var user = mongoose.model('user', userSchema, 'user');
module.exports = user;