const routes = (module.exports = require('express')());
const {  theatreDatas } = require('../services/find');

routes.post('/',async (req,res) => {
    try {

            let data = await theatreDatas.findData(req.query)
            console.log(data)
            res.status(200).send(data);


      } catch (err) {
        console.log("error:"+ err);
      }
});