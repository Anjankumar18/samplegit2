const app = (module.exports = require('express')());


app.get('/',(req,res) => {
    res.send({Message : "This is the Home page"})
});

app.use('/adduser',require('./userdata/userdataroute'));
app.use('/find',require('./findroute'))
app.use('/login',require('./loginroute'))
app.use('authenticate',require('./authenticateroute'))