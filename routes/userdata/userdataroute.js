const routes = (module.exports = require('express')());
const { adduser } = require('../../services/adduser');

routes.post('/',async (req,res) => {
    try {

        let data = await adduser.addUser(req.body)
        console.log(req.body)
        
        res.status(200).send(data);

      } catch (err) {

        console.log("error:"+err);

        if (err.name === 'MongoServerError' && err.code === 11000) {
          const msg = {error:"Email Already Exists,Please provide a Valid Email for registering,"};
          console.log(msg)

          res.status(200).send(msg)
        }
      }
});