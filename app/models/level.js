var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var levelSchema = new Schema({
    nLevel: { type: Number, required: true },
    difficulty: { type: String, required: true },
    gameInf: { type: String, required: true },
    theory: { type: String, required: true },
    //answer: { type: String, required: true },
    answer: [{ type: String, required: true }],
    requiredLevels: [mongoose.Schema.Types.ObjectId],
    tries: { type: Number }
});

// //Export the schema
module.exports = mongoose.model('Level', levelSchema);