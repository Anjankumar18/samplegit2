var jwt = require("jsonwebtoken");
const app = require("../loaders/express");

async function generateToken(name,email,mobile,age) {
  try {
    console.log(name, "username",email,"email",mobile,"mobile",age,"age")
    var token = await jwt.sign(
      {
        name: name,
        email: email,
        mobile: mobile,
        age :age
      },
      'secret'
    );
    // console.log(token, "token >>>>>>>>>>>>>>>>>>>>>")
    return token;
  } catch (err) {
    return err;
  }
}

module.exports = generateToken;
