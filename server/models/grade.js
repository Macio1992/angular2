var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GradeSchema = new Schema({
    name: String,
    level: Number
});

module.exports = mongoose.model('Grade', GradeSchema);