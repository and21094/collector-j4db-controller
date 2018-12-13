var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  password: { type: String, required: false },
  birthday: { type: Date, required: false },
  created_at: { type: Number, default: new Date().getTime() },
})

var user = mongoose.model('User', schema);

module.exports.User = user