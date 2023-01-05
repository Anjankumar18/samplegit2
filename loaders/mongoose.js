const mongoose = require("mongoose");
//Set URI
const URI = "mongodb+srv://Anjan:Grmgrm7744@cluster0.p2nhote.mongodb.net/apptask";
//Store Connection Object
const db = mongoose.connection;

mongoose.set('strictQuery',true);
mongoose.connect(URI);

//CONNECTION EVENTS
db.on("open", () => {
  console.log(`You are connected to Mongo`);
})
  .on("error", (err) => {
    console.log(err);
  })
  .on("close", () => {
    console.log(`You are no longer connected to Mongo`);
  });

  module.exports = mongoose