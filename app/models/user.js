const Game = require('./game');
const Trophy = require('./trophy');
const Level = require('./level');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    TrophySchema = mongoose.model('Trophy').schema,
    GameSchema = mongoose.model('Game').schema,
    LevelSchema = mongoose.model('Level').schema;


var userSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String },
    password: { type: String, required: true },
    admin: { type: Boolean, required: true, default: false },
    points: { type: Number, default: 0 },
    trophies: [TrophySchema],
    gamesCompleted: [{
        start: Date,
        end: Date,
        game: [GameSchema]
    }],
    levelsCompleted: [LevelSchema]
});

// //Export the schema
module.exports = mongoose.model('User', userSchema);