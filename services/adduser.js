const mongoose = require('../loaders/mongoose')
const usersdata= require('../models/userdata');

async function addUser(userdata){

    var user =  await usersdata.collection.insertOne(
        userdata
    )
    return {msg:"added a User",user}
    

 };
exports.adduser = {
    addUser : addUser,
}
