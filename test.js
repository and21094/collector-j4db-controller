'use strict'

const Db = require('./lib/db')

const db = new Db()

db.users.save({
    name: 'esteban 3',
    email: 'estcas@gmail.com',
    phone: '83636383'
})
.then((response) => console.log('response', response))
