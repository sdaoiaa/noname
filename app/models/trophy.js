var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var trophySchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    game: { type: Schema.Types.ObjectId, required: false }
});

// //Export the schema
module.exports = mongoose.model('Trophy', trophySchema);