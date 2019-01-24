'use strict'

const Users = require('./models/user')
const config = require('../config')
const StandardError = require('standard-error')
var mongoose = require('mongoose');
const Promise = require('bluebird')

const defaults = config.db

class Db {
  constructor(attrs) {
    const options = attrs || {}
    this.username = options.user || defaults.user
    this.password = options.password || defaults.password
    this.host = options.host || defaults.host
    this.database = options.db || defaults.db
    this.connected = false

    // Models
    this.users = new Users(this)
  }

  connect(callback) {
    const stringConnection = `mongodb+srv://${this.username}:${this.password}@${this.host}/${this.database}?retryWrites=true`

    this.connection = mongoose.connect(stringConnection, { useNewUrlParser: true });
    this.connected = true
    const connection = this.connection

    return Promise.resolve(connection).asCallback(callback)
  }

  disconnect(callback) {
    return new Promise((resolve, reject) => {
      if (!this.connected) {
        reject(
          new StandardError(`An active DB connection wasn't found`, {
            code: 'error-db01',
          })
        )
      }

      this.connection.disconnect()
      this.connected = false
      resolve(this.connection)
    }).asCallback(callback)

  }
}

module.exports = Db
