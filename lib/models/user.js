'use strict'
var User = require('../schemas/user');
const Promise = require('bluebird')
const StandardError = require('standard-error')

class Users {
  constructor(db) {
    this.db = db
  }

  save(data, callback) {

    var user = new User(data)

    const task = Promise.coroutine(
      function* main() {
        if (!this.connected) {
          yield this.db.connect()
        }

        return new Promise((resolve, reject) => {
          user.save()
            .then(res => {
              resolve({ result: true, data: res })
            })
            .catch(err => {
              reject(new StandardError({ message: 'error creating user', code: 'error-db02' }))
            })
        })
      }.bind(this)

    )

    return Promise.resolve(task()).asCallback(callback)
  }
}

module.exports = Users
