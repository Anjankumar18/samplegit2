const {Schema,model} = require('mongoose');

const UsersSchema = new Schema({
    name: String,
    email : {
      type:String,
      unique:true
    },
    mobile : String,
    age : Number,
    password : String,
  });
  const userData = model('userData', UsersSchema);
module.exports = userData
