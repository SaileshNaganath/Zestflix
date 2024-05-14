const serverConfig = require ("./configs/server.config");
const dbConfig = require("./configs/db.config");

const express = require ("express");
const mongoose = require ("mongoose");
const cors = require('cors');


//initializing express
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const connectToMongo = async () => {
    await mongoose.connect(dbConfig.DB_URL);
    console.log("Connected to MongoDB");
    init();
  };
  
  connectToMongo();

mongoose.set('strictQuery', true);

require('./routes/user.routes')(app);

//app initializing
app.listen(serverConfig.PORT,()=>{
    console.log('Application is running');
})