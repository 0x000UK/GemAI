const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/AIDB").then( () => {
    console.info(`[MongoDB] database connection successfull`);
}).catch((e)=> {
    console.log(`[MongoDB] status : Connection failed,\nerror : ${e}`);
});