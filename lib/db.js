'use strict'

const User = require('./models/user')

class Db {
    constructor(attrs) {
        this.user = new User(this)
    }
}

module.exports = Db
