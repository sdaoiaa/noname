var  Trophy = require('../models/trophy')
const Game = require('../models/game')
const mongoose = require('mongoose')

/**
 * @method
 * @description Afegeix un Trophy a la base de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next per poder continuar si es un middleware
 * @returns {*} redireccio
 */
var add = (req, res) => {
	let isValid = req.body.nameTrophy != "" &&
	req.body.imageTrophy != "" && req.body.description != "";
	let error = false;
    
	if (isValid) {
		let trophy = new Trophy({
			name: req.body.nameTrophy,
			image: req.body.imageTrophy,
			description: req.body.description
		})
		trophy.save()
		res.render('./admin/infoAdd')
	} else {	
		error = true
		res.render('./admin/addTrophy', {error: error})
	}
};
/**
 * @method
 * @description Afegeix tots els Trophys a la base de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} redireccio
 */
var startAdd = async(req, res, next) => {
    let allGames = await Game.find({}).exec()
    let gamesId = new Array();

    allGames.forEach(element => {
        gamesId.push(element._id);
    });
    
    let trophy0 = new Trophy({
        name: "Profesional de les Condicions",
        image: "/images/troph.png",
        description: "Has completat tots els nivells de condicionals.",
        game: gamesId[0]
    })
    await trophy0.save();

    let trophy1 = new Trophy({
        name: "Profesional dels Loops",
        image: "/images/troph.png",
        description: "Has completat tots els nivells de loops.",
        game: gamesId[1]
    })
    await trophy1.save();
    
    let trophy2 = new Trophy({
        name: "Profesional de les Arrays",
        image: "/images/troph.png",
        description: "Has completat tots els nivells d'arrray.",
        game: gamesId[2]
    })
    await trophy2.save();
    
    let trophy3 = new Trophy({
        name: "Profesional de les Funcions",
        image: "/images/troph.png",
        description: "Has completat tots els nivells de funcions.",
        game: gamesId[3]
    })
    await trophy3.save();
    
    let trophy4 = new Trophy({
        name: "Profesional dels Objectes",
        image: "/images/troph.png",
        description: "Has completat tots els nivells d'objectes.",
        game: gamesId[4]
    })
    await trophy4.save();
    
    next();
}

module.exports = {
	add,
    startAdd
}