const mongoose = require('mongoose');

var termekSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, min: 0, required: true},
}, {collection: 'termekek'});

mongoose.model('termek', termekSchema);