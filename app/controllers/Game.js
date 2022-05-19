var Game = require('../models/game');
const Level = require('../models/level')
const mongoose = require("mongoose");
/**
 * @method
 * @description Afegeix un Game a la base de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @returns {res.render} redireccio
 */
var add = async (req, res) => {
    let validForm = req.body.name != "" && req.body.descrip != "" &&
        req.body.levels >= 1;
    if (!validForm) {
        let level;
        if (req.body.levels.length > 1) {
            level = new Array;
            for (let i = 0; i < req.body.levels.length; i++) {
                level.push(await Level.findById(req.body.levels[i]).exec());
            }
        } else {
            level = await Level.findById(req.body.levels).exec()
        }

        let listGame;
        if (req.body.requiredGames != undefined) {
            if (req.body.requiredGames.length > 1) {
                listGame = new Array;
                for (let i = 0; i < req.body.requiredGames.length; i++) {
                    listGame.push(await Game.findById(req.body.requiredGames[i]).exec());
                }
            } else {
                listGame = await Level.findById(req.body.requiredGames).exec()
            }
        }

        let game = new Game({
            name: req.body.name,
            description: req.body.descrip,
            image: req.body.image,
            requiredGames: req.body.requiredGames,
            levels: level
        });
        game.save();
        res.render('./admin/infoAdd', { isError: false });
    } else {
        let gameList = await Game.find({})
        let levelList = await Level.find({})
        
        res.render('./admin/addGame', { isError: true, levelList: levelList, gameList: gameList })
    }
}
/**
 * @method
 * @description Afegeix tots els Games a la base de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next per poder continuar si es un middleware
 * @returns {res.render} redireccio
 */
var startAdd = async (req, res, next) => {
    let newLevel = await Level.find({}).exec();
    let levels0 = new Array(newLevel[0], newLevel[1], newLevel[2], newLevel[3], newLevel[4], newLevel[5]);
    let levels1 = new Array(newLevel[6], newLevel[7], newLevel[8], newLevel[9]);
    let levels2 = new Array(newLevel[10], newLevel[11], newLevel[12], newLevel[13], newLevel[14]);
    let levels3 = new Array(newLevel[15], newLevel[16], newLevel[17], newLevel[18], newLevel[19]);
    let levels4 = new Array(newLevel[20], newLevel[21], newLevel[22], newLevel[23]);


    let game0 = new Game({
        name: "Conditionals",
        description: "Endinsat a la trepidant i meravellosa aventura dels condicionals",
        image: "images/if.png",
        requiredGames: [],
        levels: levels0
    });
    await game0.save();

    let game1 = new Game({
        name: "Loops",
        description: "Endinsat a la trepidant i meravellosa aventura dels loops",
        image: "images/loop.png",
        requiredGames: [game0._id],
        levels: levels1
    });
    await game1.save();

    let game2 = new Game({
        name: "Arrays",
        description: "Endinsat a la trepidant i meravellosa aventura dels arrays",
        image: "images/array.png",
        requiredGames: [game0._id, game1._id],
        levels: levels2
    });
    await game2.save();

    let game3 = new Game({
        name: "Funcions",
        description: "Endinsat a la trepidant i meravellosa aventura dels funcions",
        image: "images/function.png",
        requiredGames: [game0._id, game1._id, game2._id],
        levels: levels3
    });
    await game3.save();

    let game4 = new Game({
        name: "Objectes",
        description: "Endinsat a la trepidant i meravellosa aventura dels objectes",
        image: "images/objects.png",
        requiredGames: [game0._id, game1._id, game2._id, game3._id],
        levels: levels4
    });
    await game4.save();
    next();
}


/**
 * @method
 * @description Agafa de la url el id del Joc i el troba a la base de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next per poder continuar si es un middleware
 * @returns {*} next redireccio
 */
//trobar per id
var find = async(req, res, next) => {
    try {
        let id = mongoose.Types.ObjectId(req._parsedOriginalUrl.path.split("/")[2]);
        req.params.game = await Game.findById(id).exec();
        next();
    } catch (error) {
        res.render('error');
    }

};
/**
 * @method
 * @description Retorna tots els Games de la base de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next per poder continuar si es un middleware
 * @returns {*} next redireccio
 */
var list = async (req, res, next) => {
    req.params.games = await Game.find({});
    next();
}
/**
 * @method
 * @description Retorna tots els Games de la base de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next per poder continuar si es un middleware
 * @returns {*} next redireccio
 */
var findGame = async (req, res, next) => {
    let game = await Game.findById(req.params.gameId).exec();
    req.params.actualGame = game;
    req.session.actualGame = game;
    next()
}

module.exports = {
    add,
    startAdd,
    list,
    find,
    findGame
}