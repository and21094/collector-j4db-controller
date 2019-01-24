var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  password: { type: String, required: false },
  birthday: { type: Date, required: false },
  token: { type: String, required: false },
  created_at: { type: Number, default: new Date().getTime() },
})

module.exports = mongoose.model('User', schema);

// module.exports = function (connection) {
//   var mongoose = require('mongoose');
//   var Schema = mongoose.Schema;

//   const schema = new Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     phone: { type: String, required: true },
//     password: { type: String, required: false },
//     birthday: { type: Date, required: false },
//     token: { type: String, required: false },
//     created_at: { type: Number, default: new Date().getTime() },
//   })

//   return mongoose.model('User', schema);
// }