var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: String,
    lastName: String,
    email: String,
    grade: { type: Schema.ObjectId, ref: 'Grade' }
});

module.exports = mongoose.model('Student', StudentSchema);