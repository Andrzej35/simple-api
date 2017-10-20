// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    isSuccess: Boolean,
    name: String,
    uploads: Number,
    date: Number
})

// Return model
module.exports = restful.model('User', userSchema);
