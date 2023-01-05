const routes = (module.exports = require('express')());
const {  token } = require('../services/login');

routes.post('/',async (req,res) => {
    try {

            let data = await token.tokensend(req.query)
            console.log(data)
            res.status(200).send(data);


      } catch (err) {
        console.log("error:"+ err);
      }
});