var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MarkSchema = require('./mark');

var StudentSchema = new Schema({
    name: String,
    lastName: String,
    email: String
});

module.exports = mongoose.model('Student', StudentSchema);