const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.Promise = global.Promise;
const app = express();
const employee = require('./routes/employee.routes')(router);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api', employee); 
app.listen(3001,()=>{

    console.log("Listing post 3001");
})




// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});