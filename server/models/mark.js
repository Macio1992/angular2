var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarkSchema = new Schema({
    value: String,
    weight: Number,
    description: String,
    student: { type: Schema.ObjectId, ref: 'Student'}
});

module.exports = mongoose.model('Model', MarkSchema);