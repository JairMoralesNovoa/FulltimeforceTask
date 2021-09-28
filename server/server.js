//import to run server
//devBundle only on development (comment on prod)
import express from "express";
import devBundle from "./devBundle.js";
import template from "../template.js";

const path = require('path');

//__dirname
const CURRENT_WORKING_DIR = process.cwd()

//Create express instance and 
const app = express();
devBundle.compile(app);

//static folder definition
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));


//Routing 
app.get('/', (rqe,res)=>{
    res.status(200).send(template())
});


//Server up & listening
let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.log(`Server runing in PORT ${port}`);
});