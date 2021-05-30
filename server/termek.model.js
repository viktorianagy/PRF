const mongoose = require('mongoose');

var termekSchema = new mongoose.Schema({
    id: {type: Number, unique: true, required: true}, 
    name: {type: String, required: true},
    price: {type: Number, min: 0, required: true},
}, {collection: 'termekek'});

mongoose.model('termek', termekSchema);