'use strict'

const Db = require('./lib/db')

const db = new Db()

db.user.save({
    name: 'esteban',
    email: 'estcas@gmail.com',
    phone: '83636383'
})
