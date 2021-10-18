const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const adminroutes = require(',/routes/admin.routes');

app.use(express.static(path.join(__dirname,'views')));

app.use(bodyParser.json());

app.use(adminroutes);

mongoose.connect(
    'mongodb+srv://Mahmoud:Azizeh',
)
.then(result=>{
    console.log("connected");
    app.listen(3000,()=>{
        console.log("Listen to port 3000");
    
    });

})
.catch(err=>{
    console.log(err);

})
