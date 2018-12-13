'use strict'
var model = require('../schemas/user');
const Promise = require('bluebird')

class Users {
  constructor(db) {
    this.db = db
  }

  save(data, callback) {
    const task = Promise.coroutine(
      function* main() {
        if (!this.connected) {
          yield this.db.connect()
        }

        var user = new model.User(data);
        return new Promise((resolve, reject) => {
          user.save(function (error) {
            if (error) {
              reject('error creating user')
            }

            resolve({ result: true, message: 'user created' })
          });
        })
      }.bind(this)

    )

    return Promise.resolve(task()).asCallback(callback)
  }
}

module.exports = Users
