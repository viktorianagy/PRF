const express = require('express');
const router = express.Router();
const passport = require('passport');

const mongoose = require('mongoose');
const userModel = mongoose.model('user');
const termekModel = mongoose.model('termek');
const adminuserModel = mongoose.model('adminuser');


router.route('/registration').post((req, res, next) => {
    if(req.body.username && req.body.email && req.body.password) {
        userModel.findOne({username: req.body.username}, (err, user) => {
            if(err) return res.status(500).send('DB hiba');
            if(user) {
                return res.status(400).send('Felhasználónév már létezik.');
            } else {
                const user = new userModel({username: req.body.username, email: req.body.email, password: req.body.password});
                user.save((error) => {
                    if(error) return res.status(500).send('A regisztáció során hiba történt');
                    return res.status(200).send('Sikeres regisztáció');
                })
            }
        })
    }
})

router.route('/login').post((req, res, next) => {
    if(req.body.username, req.body.password) {
        passport.authenticate('local', function(error, user) {
            if(error) return res.status(500).send(error);
            req.login(user, function(error) {
                if(error) return res.status(500).send(error);
                return res.status(200).send('Bejelentkezes sikeres');
            })
        })(req, res);
    } else {
        return res.status(400).send('Hibas keres, username es password kell');
    }
});

router.route('/logout').post((req, res, next) => {
    if(req.isAuthenticated()) {
        req.logout();
        return res.status(200).send('Kijelentkezes sikeres');
    } else {
        return res.status(403).send('Nem is volt bejelentkezve');
    }
})

router.route('/status').get((req, res, next) => {
    if(req.isAuthenticated()) {
        return res.status(200).send(req.session.passport);
    } else {
        return res.status(403).send('Nem is volt bejelentkezve');
    }
    
})


router.route('/user').get((req, res, next) => {
    userModel.find({}, (err, users) => {
        if(err) return res.status(500).send('DB hiba');
        res.status(200).send(users);
    })
}).post((req, res, next) => {
    if(req.body.username && req.body.email && req.body.password) {
        userModel.findOne({username: req.body.username}, (err, user) => {
            if(err) return res.status(500).send('DB hiba');
            if(user) {
                return res.status(400).send('Hiba, mar letezik ilyen felhasznalonev');
            }
            const usr = new userModel({username: req.body.username, password: req.body.password, 
                email: req.body.email});
            usr.save((error) => {
                if(error) return res.status(500).send('A mentés során hiba történt');
                return res.status(200).send('Sikeres mentes tortent');
            })
        })
    } else {
        return res.status(400).send('Hibas keres, username, email es password kell');
    }
})

router.route('/termek').get((req, res, next) => {
   termekModel.find({}, (err, termekek) => {
        if(err) return res.status(500).send('DB hiba');
        res.status(200).send(termekek);
    }).sort({name: 'asc'});
}).post((req, res, next) => {
    if(req.body.id && req.body.name && req.body.price) {
        termekModel.findOne({id: req.body.id}, (err, termek) => {
            if(err) return res.status(500).send('DB hiba');
            const term = new termekModel({id: req.body.id, name: req.body.name, price: req.body.price});
            term.save((error) => {
                if(error) return res.status(500).send('A mentés során hiba történt');
                return res.status(200).send('Sikeres mentes tortent');
            })
        })
    } else {
        return res.status(400).send('Hibas keres, name es price kell');
    }
}).put((req, res, next) => {
        if(req.body.id && req.body.name && req.body.price) {
            termekModel.findOne({id: req.body.id}, (err, termek) => {
                if(err) return res.status(500).send('DB hiba');
                if(termek) {
                    termek.name = req.body.name;
                    termek.price = req.body.price;
                    termek.save((error) => {
                        if(error) return res.status(500).send('A mentés során hiba történt');
                        return res.status(200).send('Sikeres mentes tortent');
                    })
                } else {
                    return res.status(400).send('Nincs ilyen id az adatbázisban');
                }
            })
        } else {
            return res.status(400).send('Nem volt id vagy value');
        }    
}).delete((req, res, next) => {
    if(req.body.id) {
        termekModel.findOne({id: req.body.id}, (err, termek) => {
            if(err) return res.status(500).send('DB hiba');
            if(termek) {
                termek.delete((error) => {
                    if(error) return res.status(500).send('A mentés során hiba történt');
                    return res.status(200).send('Sikeres torles tortent');
                })
            } else {
                return res.status(400).send('Nincs ilyen id az adatbázisban');
            }
        })
    } else {
        return res.status(400).send('Nem volt id');
    }
})

router.route('/adminuser').get((req, res, next) => {
    adminuserModel.find({}, (err, admins) => {
        if(err) return res.status(500).send('DB hiba');
        res.status(200).send(admins);
    })
}).post((req, res, next) => {
    if(req.body.adminname && req.body.password && req.body.email) {
        
        adminuserModel.findOne({adminname: req.body.adminname}, (err, adminuser) => {

            if(err) return res.status(500).send('DB hiba');
            if(adminuser) {
                return res.status(400).send('Hiba, mar letezik ilyen adminisztrátor.');
            }
            const adm = new adminuserModel({adminname: req.body.adminname, password: req.body.password, 
                email: req.body.email});
            adm.save((error) => {
                console.log(error);
                if(error) return res.status(500).send('A mentés során hiba történt');
                return res.status(200).send('Sikeres mentes tortent');
            })
        })
    } else {
        return res.status(400).send('Hibas keres, adminname, email es password kell');
    }
}).put((req, res, next) => {
    if(req.body.adminname && req.body.email && req.body.password) {
        adminuserModel.findOne({adminname: req.body.adminname}, (err, adminuser) => {
            if(err) return res.status(500).send('DB hiba');
            if(adminuser) {
                adminuser.adminname = req.body.adminname;
                adminuser.password = req.body.password;
                adminuser.email = req.body.email;
                adminuser.save((error) => {
                    if(error) return res.status(500).send('A mentés során hiba történt');
                    return res.status(200).send('Sikeres mentes tortent');
                })
            } else {
                return res.status(400).send('Nincs ilyen id az adatbázisban');
            }
        })
    } else {
        return res.status(400).send('Nem volt id vagy value');
    }    
}).delete((req, res, next) => {
    if(req.body.adminname) {
        adminuserModel.findOne({adminname: req.body.adminname}, (err, adminuser) => {
            if(err) return res.status(500).send('DB hiba');
            if(adminuser) {
                adminuse.delete((error) => {
                    if(error) return res.status(500).send('A mentés során hiba történt');
                    return res.status(200).send('Sikeres torles tortent');
                })
            } else {
                return res.status(400).send('Nincs ilyen id az adatbázisban');
            }
        })
    } else {
        return res.status(400).send('Nem volt id');
    }
})





module.exports = router;