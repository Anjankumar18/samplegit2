const userData = require('../models/userdata');
const jwttoken =require('../lib/generatetoken')

async function tokensend(username){
    try{

    var result = await userData.collection.findOne(username ,{projection:{_id: 0,password : 0}})
    console.log(result,"--->")
    var name = result.name;
    var email =result.email;
    var mobile =result.mobile;
    var age=result.age;
    var token = await jwttoken(name,email,mobile,age)
    return token;

    } catch(err){
        console.log(err)
        throw err;
    }

 };
exports.token = {
    tokensend : tokensend,
}
