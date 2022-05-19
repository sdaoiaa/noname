var User = require('../models/user');
// var Level = require('../models/level');

const bcrypt = require('bcrypt');
const level = require('../models/level');
const game = require('../models/game')
const Level = require('../models/level')
const Trophy = require('../models/trophy')

/**
 * @method
 * @description Un metode que permet iniciar sessio comprovant que l'usuari i la contrasenya 
 * tinguin la convinacio correcte
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */
var login = async (req, res, next) => {
    if (req.body.email && req.body.password) {
        var user = await User.find({ 'email': req.body.email });
        if (user.length > 0) {
            var passwordBD = user[0].password;
            const comparar = await Encrypt.comparePassword(req.body.password, passwordBD);
            if (comparar) {
                req.session.email = user[0].email;
                req.session.name = user[0].name;
                req.session.surname = user[0].surname;
                req.session.image = user[0].image;
                req.session.userId = user[0]._id;
                req.session.actUser = user[0];
                next();
            } else {
                res.render("login", { error: "Contrasenya incorrecte", email: req.body.email, password: req.body.password });
            }
        } else {
            res.render("login", { error: "Email no existent", email: req.body.email, password: req.body.password });
        }
    } else {
        res.render("login", { error: "Has d'introduir l'email i contrasenya" });
    }
};

/**
 * @method
 * @description Un metode que permet sortir de la sessio
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next
 * @returns {*} next redireccio
 */
var logout = (req, res, next) => {
    req.session.destroy();
    next();
};

/**
 * @method
 * @description Comprova si un usuari esta loguejat
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */
var auth = function (req, res, next) {
    if (req.session.email) {
        next();
    } else {
        res.redirect('/login');
    }
};
/**
 * @method
 * @description Compara i encrypta passwords
 * @version 1.0.0
 * @param {String} password representa las peticions HTTP 
 * @param {String} hashPassword resposta que envia quan arriba una peticio HTTP
 * @returns {*} resp 
 */
const Encrypt = {
    cryptPassword: (password) =>
        bcrypt.genSalt(10)
            .then((salt => bcrypt.hash(password, salt)))
            .then(hash => hash),

    comparePassword: (password, hashPassword) =>
        bcrypt.compare(password, hashPassword)
            .then(resp => resp)

}

/**
 * @method
 * @description Crea un usuari i ho puja a la base de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */
var register = async (req, res, next) => {
    let errors = { name: 0, surname: 0, email: 0, password: 0 };
    let error = false;
    //Comprovar que no estiguin vuits
    for (let i = 0; i < Object.keys(req.body).length; i++) {
        if (!Object.values(req.body)[i]) {
            errors[Object.keys(errors)[i]] = 1;
            error = true;
        }
    }

    //si no hi ha cap vuit, afegirho
    if (!error) {
        //mirar que no existeixi un usuari amb el mateix mail abans d'afegir-ho
        var userTmp = await User.find({ 'email': req.body.email });
        if (userTmp.length >= 1) {
            res.render("register", { error: "Ja existeix un usuari amb aquest email", name: req.body.name, surname: req.body.surname, email: req.body.email, password: req.body.password });
        } else {
            const hashPassword = await Encrypt.cryptPassword(req.body.password);
            var user = new User({ name: req.body.name, surname: req.body.surname, email: req.body.email, password: hashPassword, admin: false, points: 0, image: "images/profile1.png",trophies: [],gamesCompleted: [],levelsCompleted: []});
            user.save();
            req.session.email = user.email;
            req.session.name = user.name;
            req.session.surname = user.surname;
            req.session.image = user.image;
            req.session.id = user._id;
            req.session.actUser = user;
            next();
        }
    } else {
        //si hi ha algun vuit enviar l'objecte de quins tenen error
        res.render("register", { errors: errors, name: req.body.name, surname: req.body.surname, email: req.body.email, password: req.body.password });
    }
};
/**
 * @method
 * @description Crea un usuari amb els valor d'un formulari d'admin i el puja a la base de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @returns {*} res.render
 */
var add = async (req, res) => {
    let isValidForm = req.body.name != "" && req.body.surname != "" && req.body.email != "";
    if (!isValidForm) {
        error = true;
        res.render('./admin/addUser', { error: error });
    } else {
        let password;
        error = false;
        if (req.body.password == "") {
            password = "cambiar1";
        } else {
            password = req.body.password;
        }

        const hashPassword = await Encrypt.cryptPassword(password);

        let user = new User({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: hashPassword,
            admin: req.body.flexRadioDefault,
            points: 0,
            image: "images/profile1.png"
        })
        user.save();
        res.render('./admin/infoAdd', { error: error });
    }
}
/**
 * @method
 * @description Envia a la pagina d'admin que s'ha seleccionat en un formulari
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @returns {*} redireccio
 */
var sendAdmin = (req, res) => {
    res.render('./admin/' + req.body.algo, { error: false });
}

/**
 * @method
 * @description Afegeix users admin a la base de de dades
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} redireccio next
 */
var startAdd = async (req, res, next) => {
    const hashPassword = await Encrypt.cryptPassword('admin123');

    let newLevel = await Level.find({}).exec();
    let user = new User({
        name: "Ivan",
        surname: "Rodriguez",
        email: "ivanrodriguezporto@gmail.com",
        password: hashPassword,
        admin: true,
        points: 10001,
        trophies: [],
        image: "images/profile1.png",
        gamesCompleted: [],
        levelsCompleted: []
    })
    await user.save();
    let user0 = new User({
        name: "Gemma",
        surname: "Marin",
        email: "gemmaMarin@gmail.com",
        password: hashPassword,
        admin: true,
        points: 10000,
        trophies: [],
        image: "images/profile1.png",
        gamesCompleted: [],
        levelsCompleted: []
    })
    await user0.save();
    let user1 = new User({
        name: "Keila",
        surname: "Gonzalez",
        email: "keilaGonzalez@gmail.com",
        image: "images/profile1.png",
        password: hashPassword,
        admin: true,
        points: 10002,
        trophies: [],
        gamesCompleted: [],
        levelsCompleted: []
    })
    await user1.save();
    next();
}

/**
 * @method
 * @description Busca a un usuari per el seu email
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */

var find = (req, res) => {
    User.findOne({ _id: req.params.email }, function (error, user) {
        res.send(user);
    })
};

/**
 * @method
 * @description 
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */

var sendAdmin = async (req, res) => {
    let levelList, gameList;
    levelList = await level.find({});
    if (req.body.list == 'addGame') {
        gameList = await game.find({})
        res.render('./admin/' + req.body.list, { error: false, levelList: levelList, gameList: gameList });
    } else if (req.body.list == 'addLevels') {
        res.render('./admin/' + req.body.list, { error: false, levels: levelList });
    } else {
        res.render('./admin/' + req.body.list, { error: false });
    }
}

/**
 * @method
 * @description Update camps dels usuaris 
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */

var update = async(req, res, next) => {
    let errorUpdate = false;
    const userEmail = req.session.email;
    let conditions = {
        email: userEmail
    }
    let users = await User.find({});

    let nom = req.body.name;
    let surname = req.body.surname;
    let email = req.body.email;
    let image = req.body.image;
    let contador =0;

    for(const user of users){
        if(user.email == req.body.email){
            errorUpdate = true
            email = userEmail
            contador++;
        }
    }
    if(contador != 0){
        req.session.email = userEmail
        req.body.email = userEmail
    }
    let update = { name: nom, surname: surname, image: image, email: email}

    const newUser = await User.findOneAndUpdate(conditions, update).exec();
    req.session.name = req.body.name;
    req.session.surname = req.body.surname;
    req.session.image = req.body.image;
    req.session.email = req.body.email;
    req.session.errorUpdate = errorUpdate;
    next();
};

/**
 * @method
 * @description Comprova si un usuari es admin
 * @version 1.0.0
 * @param {JSON} req representa las peticions HTTP 
 * @param {JSON} res resposta que envia quan arriba una peticio HTTP
 * @param {*} next 
 * @returns {*} next redireccio
 */
var adminAuth = async (req, res, next) => {
    if (req.session.email == undefined) {
        res.redirect('/')
    } else {
        let conectedUser = await User.findOne({ email: req.session.email }).exec()

        if (conectedUser.admin) {
            next()
        } else {
            res.redirect('/home')
        }
    }
}

module.exports = {
    login,
    logout,
    auth,
    register,
    find,
    add,
    sendAdmin,
    startAdd,
    update,
    adminAuth
}