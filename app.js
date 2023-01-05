const app = require('./loaders/express')
const  routes = require('./routes')
//const logger = require("./loaders/logger");

app.use(routes);
app.listen(3000, function (err) {
    if (err) {
      console.log("Failed to start the server" + err);
    }
    console.log("Test module running on http:// localhost:3000");
});