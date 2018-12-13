'use strict'

const Db = require('./lib/db')

const db = new Db()

db.user.save({
    name: 'esteban 2',
    email: 'estcas@gmail.com',
    phone: '83636383'
})
