var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function (callback) {
    console.log("Connection Succeeded.");
});

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