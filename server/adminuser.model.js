const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var adminuserSchema = new mongoose.Schema({
    adminname: {type: String, unique: true, required: true, lowercase: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    accessLevel: {type: String}
}, {collection: 'admins'});

adminuserSchema.pre('save', function(next) {
    const adminuser = this;
    if(adminuser.isModified('password')) {
        adminuser.accessLevel = 'admin';
        bcrypt.genSalt(10, function(err, salt) {
            if(err) {
                console.log('hiba a salt generalasa soran');
                return next(error);
            }
            bcrypt.hash(adminuser.password, salt, function(error, hash) {
                if(error) {
                    console.log('hiba a hasheles soran');
                    return next(error);
                }
                adminuser.password = hash;
                return next();
            })
        })

    } else {
        return next();
    }
});

adminuserSchema.methods.comparePasswords = function(password, nx) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        nx(err, isMatch);
    });
};

mongoose.model('adminuser', adminuserSchema);