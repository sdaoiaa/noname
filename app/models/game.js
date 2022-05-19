const Level = require('./level');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    LevelSchema = mongoose.model('Level').schema;

var gameSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: {type: String},
    requiredGames: [mongoose.Schema.Types.ObjectId],
    levels: [LevelSchema]
});

// //Export the schema
module.exports = mongoose.model('Game', gameSchema);