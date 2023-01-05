const auth = require('../loaders/jwt');
const routes = require(module.exports = require('express')());

routes.post('/authenticate',(req,res) => {
    if (auth) {
        res.redirect('/find')
    }
    if (err) {
        console.log("err---------------------------------")

        throw err;
    }
})