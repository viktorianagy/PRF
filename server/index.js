const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');

const app = express();

const port = process.env.PORT || 3000;
const dbUrl = 'mongodb+srv://admin:vCyqNGowJGYXnx5l@prf-cluster.oqfgk.mongodb.net/test';

mongoose.connect(dbUrl);

const whitelist = ['http://localhost:4200']

var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin', 
    'Origin', 'Accept']
  };

require('./example.model');
require('./user.model');
require('./termek.model')
  
const userModel = mongoose.model('user');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));

app.use(cors(corsOptions));

passport.use('local', new localStrategy(function (username, password, done) {
    userModel.findOne({ username: username }, function (err, user) {
        if (err) return done('Hiba lekeres soran', null);
        if (!user) return done('Nincs ilyen felhasználónév', null);
        user.comparePasswords(password, function (error, isMatch) {
            if (error) return done(error, false);
            if (!isMatch) return done('Hibas jelszo', false);
            return done(null, user);
        })
    })
}));

passport.serializeUser(function (user, done) {
    if (!user) return done('nincs megadva beléptethető felhasználó', null);
    return done(null, user);
});

passport.deserializeUser(function (user, done) {
    if (!user) return done("nincs user akit kiléptethetnénk", null);
    return done(null, user);
});

app.use(expressSession({ secret: 'kelloenhosszusztring', resave: true }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connection.on('connected', () => {
    console.log('db csatlakoztatva');
})

mongoose.connection.on('error', (err) => {
    console.log('Hiba tortént', err);
})

app.get('/', (req, res, next)=> {
    res.send('Na mi van');
})

app.use('/', require('./routes'));


app.use((req, res, next) => {
    console.log('Hiba');
    res.status(404).send('A kért erőforrás nem található.');
})

app.listen(port, () => {
    console.log('The server is running!');
})