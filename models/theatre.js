const {Schema,model} = require('mongoose');

const theatreSchema = new Schema({
    theatreName : String,
    movieName : String,
    address : String,
    noOfShows : Number,
    price : Number,
    Shows : {
        "10am" : {
            a1 : String,
            a2 : String,
            a3 : String,
            a4 : String,
            a5 : String
        },
        "02pm" : {
            a1 : String,
            a2 : String,
            a3 : String,
            a4 : String,
            a5 : String
        },
        "06pm" : {
            a1 : String,
            a2 : String,
            a3 : String,
            a4 : String,
            a5 : String
        },
        "10pm" : {
            a1 : String,
            a2 : String,
            a3 : String,
            a4 : String,
            a5 : String
        }
         
    }
});
const theatreData = model('theatreData',theatreSchema);
module.exports = theatreData