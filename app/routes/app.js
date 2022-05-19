const console = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');
var user = require('../controllers/User');
const userXgame = require('../controllers/UserXGame')
const game = require('../controllers/Game');
const level = require('../controllers/Level')
const trophy = require('../controllers/Trophy')
const userxgame = require('../controllers/UserXGame')


router.use(function(req, res, next) {
    console.log('/' + req.method);
    next();
});

//Pre-home view
router.get("/", function (req, res) {
    res.render("prehome");
});

//Register view
router.get('/register', function(req, res) {
    res.render('register');
});
//Register controlador
router.post('/register', user.register, function(req, res) {
    res.redirect('/home');
});

//Login view
router.get('/login', function(req, res) {
    res.render('login');
});
//Login controlador
router.post('/login', user.login, function(req, res) {
    res.redirect('/home');
});

//Home view
router.get("/home", user.auth, game.list, function(req, res) {
    res.render("home", { name: req.session.name, image: req.session.image, games: req.params.games });
});
// router.post("/home", user.auth, function(req, res) {
//     res.render("home");
// });

//Profile view
router.get("/profile", user.auth, game.list, userXgame.getTrophies, userXgame.setBarPercent, function(req, res) {
    res.render("profile", { name: req.session.name, surname: req.session.surname, email: req.session.email, image: req.session.image, trophies: req.session.trophies, progress: req.session.progress, games: req.params.games});
});
router.post("/profile", user.auth, user.update, game.list, function(req, res) {
    res.render("profile", { name: req.session.name, surname: req.session.surname, email: req.session.email, image: req.session.image, games: req.params.games, trophies: req.session.trophies, progress: req.session.progress, errorUpdate: req.session.errorUpdate });
});

//Log Out
router.get("/logout", user.auth, user.logout, function(req, res) {
    res.redirect("/login");
});


router.get("/games", user.auth, game.list, userXgame.setBarPercent, level.list , async (req, res) => {
    let lastLevel = {isLast: false,gameName: 'notLast'};

    if (req.session.lastLevel){
        lastLevel = req.session.lastLevel;
    }
    res.render("games", { name: req.session.name, image: req.session.image, games: req.params.games, progress: req.session.progress, lastLevel: lastLevel});   
});
    
router.get("/games", user.auth, game.list, userXgame.setBarPercent, async(req, res) => {
    res.render("games", { name: req.session.name, image: req.session.image, games: req.params.games, progress: req.session.progress });
});

router.get("/game/:id", user.auth, game.list, game.find, userXgame.setBarPercent, async (req, res) => {
    res.render("game", { name: req.session.name, image: req.session.image, games: req.params.games, game: req.params.game, progress: req.session.progress });
});

router.post("/game/last", userXgame.pushOneLevel, userXgame.pushGameCompleteUser, async (req, res) => {
    res.redirect("/games");
});
// router.get("/game", async(req, res) => {
//     res.render("game",{name:req.session.name, last:req.session.surname, image: req.session.image});
// }); 

router.get('/play/:gameId/:levelId', user.auth, game.list, level.findLevel, game.findGame, userXgame.buttonNext, userxgame.accesibleGames, (req, res) => {
    res.render('playGame', {
        name: req.session.name,
        image: req.session.image,
        level: req.session.actualLevel,
        error: false,
        correctAnswer: false,
        game: req.session.actualGame,
        games: req.params.games,
        buttonNext: req.session.buttonNext
    });
});
router.post('/play/:gameId/:levelId', user.auth, game.list,level.checkAnswer);

// addToDB :þ
router.get('/adminInfo', user.adminAuth, level.list,(req, res) => {
    res.render('./admin/infoAdd')
})
router.post('/adminInfo', user.adminAuth, user.sendAdmin);

router.post('/newGame', user.adminAuth, game.add);

router.post('/newLevel', user.adminAuth, level.add)

router.post('/newUser', user.adminAuth, user.add)

router.post('/newTrophy', user.adminAuth, trophy.add)

router.get('/addGame', game.startAdd, function (req, res) {
    res.redirect('/');
});

router.get('/addLevel', level.startAdd, function (req, res) {
    res.redirect('/');
});

router.get('/addUser', user.startAdd, function (req, res) {
    res.redirect('/');
});

//afegir informacio a la bd
router.get('/addAll', level.startAdd, user.startAdd, game.startAdd, trophy.startAdd,  function (req, res) {
    res.redirect('/');
})

router.post('/nextLevel',userXgame.pushOneLevel, userXgame.pushGameCompleteUser,level.nextLevel)

module.exports = router;
