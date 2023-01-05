const express = require("express");
const expressJWT = require("express-jwt");
const bearerToken = require("express-bearer-token");
var jwt = require("jsonwebtoken");
// const CONFIG = require("./dotenv");
const app = require("./express");
// const logger = require("./logger");
// const pathToRegexp = require("path-to-regexp");
const token = require('../services/login')

// app.set("secret", CONFIG.JWT_SECRET);

// app.use(bearerToken());
exports.authorisation = async (req, res, next) => {
  //console.log(req.originalUrl.indexOf("/register"), "**");
  let string = req.originalUrl;
  if (req.originalUrl.indexOf("/login") >= 0) {
    return next();
  }
  if (req.originalUrl.indexOf("/authenticate") >= 0) {
    return next();
  }

//   var token = req.token;
  jwt.verify(token, 'secret', async function (err, authData) {
    if (err) {
      res.status(401).send({
        success: false,
        code: 401,
        message:
          "Failed to authenticate token. Make sure to include the " +
          "token returned from login in the authorization header " +
          " as a Bearer token",
      });
      return;
    } else {
        var data = authData
        res.status(200).send(data)
        console.log(token,"---");
        // return next()
        
    }//{
    //     return next();
      
    // }
  });
};
