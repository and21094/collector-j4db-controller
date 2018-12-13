'use strict'
var model = require('../schemas/user');
var mongoose = require('mongoose');


class User {
    constructor() { }

    save(data) {
        var user = new model.User(data);

        user.save(function (error) {
            console.log('Your user has been saved.');

            return { message: 'user created' }
            if (error) {
                console.error(error);
            }

            mongoose.connection.close()
        });
    }
}

module.exports = User
