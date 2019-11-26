var mongoose = require('mongoose');

var userListSchema = new mongoose.Schema({
    username: String,
    idMeal: String,
    strMealThumb: String,
    strMeal: String,
    strInstructions: String,
    strIngredient: String,
    strYoutube: String
})

var userList = mongoose.model('userList', userListSchema, 'userList');
module.exports = userList;