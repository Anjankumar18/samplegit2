const theatreData = require('../models/theatre')

async function findData(search){
    try{

    var result = await theatreData.collection.findOne(search,{projection:{shows : 1,_id : 0}})
    return result;

    } catch(err){
        console.log(err)
        throw err;
    }

 };
exports.theatreDatas = {
    findData :findData,
}
