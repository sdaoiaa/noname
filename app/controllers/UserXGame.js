const User = require('../models/user');
const Level = require('../models/level');
const Game = require('../models/game')
const Troph = require('../models/trophy');
const mongoose = require("mongoose");

/**
 * @method
 * @description Troba un Game amb la id que porta la ruta
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */
// metodo repetido !
var find = async(req, res, next) => {
    let id = mongoose.Types.ObjectId(req._parsedOriginalUrl.path.split("/")[2]);
    req.params.game = await Game.findById(id).exec();
    next();
};
/**
 * @method
 * @description Llista tots els Games
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */
// repetit ! 
var list = async(req, res, next) => {
    req.params.games = await Game.find({});
    next();
}

/**
 * @method
 * @description Puja el trofeu al camp trophies de la base de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */
// deberia estar en user ???
var pushTrophies = async(req, res, next) => {
    var userEmail = req.session.email;
    var trophies = await Troph.find({}).exec();
    var condition = {
        email: userEmail
    }
    var update = {
        trophies: trophies
    };
    let user1 = User.findOneAndUpdate(condition, update, { new: true }, () => {})
    next();
};

/**
 * @method
 * @description Retorna tots els trofeus d'un usuari
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */
// este metodo deberia ir en trophy ? ??
var getTrophies = async(req, res, next) => {
    let user2 = await User.findOne({ 'email': req.session.email });
    req.session.trophies = user2.trophies;
    next();
};


/**
 * @method
 * @description Puja el Game que has completat a game de User
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */

var pushGameCompleteUser = async(req, res, next) => {
    //Tots els jocs
    let games = await Game.find({});
    let update;
    let user = await User.findOne({ 'email': req.session.email });
    let condicio = {
        email: user.email
    }
    let today = new Date();
    let completed = 0;
    let contador = 0
    for (const game of games) {
        completed = 0;
        for (const level of game.levels) {
            for (const userLevel of user.levelsCompleted) {
                if (userLevel._id.equals(level._id)) {
                    completed++
                }
            }
        }
        if (game.levels.length == completed) {
            update = {
                gamesCompleted: [{
                    end: today,
                    game: game
                }]
            }
            if (user.gamesCompleted == 0) {
                User.findOneAndUpdate(condicio, { $push: update }, { new: true }).exec();
            } else {
                contador = 0;
                for (const games of user.gamesCompleted) {
                    for (const joc of games.game) {
                        if (game._id.equals(joc._id)) {
                            contador++;
                        }
                    }
                }
                if (contador == 0) {
                    User.findOneAndUpdate(condicio, { $push: update }, { new: true }).exec();
                }
            }
        }
    }
    next();
};

/**
 * @method
 * @description Puja un nivell a levelsCompleted d'User
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */
var pushOneLevel = async(req, res, next) => {
    let level = req.session.actualLevel;
    let user = await User.findOne({ 'email': req.session.email });
    let contador = 0;
    let condicio = {
        email: user.email
    }
    let update = {
        levelsCompleted: level
    }
    if (user.levelsCompleted.length == 0) {
        User.findOneAndUpdate(condicio, { $push: update }, { new: true }).exec();
    } else {
        contador = 0;
        for (const levels of user.levelsCompleted) {
            if (levels._id.equals(level._id)) {
                contador++;
            }
        }
        if (contador == 0) {
            User.findOneAndUpdate(condicio, { $push: update }, { new: true }).exec();

        }
    }
    next();
};

/**
 * @method
 * @description Comprova quants nivells d'un joc has completat
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */
var setBarPercent = async(req, res, next) => {
    //All Games
    let games = await Game.find({});
    let user = await User.findOne({ 'email': req.session.email });
    let progress = [];
    let completed = 0;

    //Level Games
    for (const game of games) {
        completed = 0;
        for (const level of game.levels) {
            for (const userLevel of user.levelsCompleted) {
                if (userLevel._id.equals(level._id)) {
                    completed++;
                }
            }
        }
        progress.push({ nom: game.name, completed: completed, total: game.levels.length });
    }
    req.session.progress = progress;
    next();
};

/**
 * @method
 * @description Comprova quan pot estar el buto per pasar de nivell
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */

var buttonNext = async(req, res, next) => {
    const actualLevel = req.session.actualLevel;
    const user = await User.findOne({ 'email': req.session.email });
    let contador = 0;
    for (const level of user.levelsCompleted) {
        if (actualLevel._id.equals(level._id)) {
            contador++;
        }
    }
    if (contador == 1) {
        req.session.buttonNext = true;
    } else {
        req.session.buttonNext = false;
    }
    next();
};
/**
 * @method
 * @description Comprova quins son els nivells/Games accessibles
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */
// retorna els games que pot accedir l'usuari
var accesibleGames = async (req, res, next) => {
	// añadir mas cosas a la bd para pruevas
	let actUser = req.session.actUser;
	let requiredGames = req.session.actualGame.requiredGames;
	let requiredLevels = req.session.actualLevel.requiredLevels;

	if (requiredGames.length == 0 && requiredLevels.length == 0) {
		next();
	} else {

		// comprovar que los games required los tenga el usuario completados
        let findGame = [];
        for (const games of actUser.gamesCompleted) {
            for (const joc of games.game) {
                findGame.push(requiredGames.find(element => element.equals(joc._id)));
            }
        }
		// comprovar que los levels required los tenga el usuario completados
        let findLvl = [];
        for (const level of actUser.levelsCompleted) {
            findLvl.push(requiredLevels.find(element => element.equals(level._id)));
        }		
        if (requiredGames.length != 0) {
            if(findGame){
                if (requiredLevels.length != 0) {
                    if (findLvl) {
                        next();
                    }else{
                        res.redirect('/games');
                    }
                } else{
                    next();
                }
            } else{
                res.redirect('/games');
            }
        }else{
            if (requiredLevels.length != 0) {
                if (findLvl) {
                    next();
                }else{
                    res.redirect('/games');
                }
            } 
		}
	}
};

module.exports = {
    pushTrophies,
    getTrophies,
    setBarPercent,
    pushGameCompleteUser,
    pushOneLevel,
    list,
    find,
    accesibleGames,
    buttonNext
};
