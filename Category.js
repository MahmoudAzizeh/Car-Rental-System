const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({

    name:{
        type:String,
        required : true
    },
    description:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
        required:true
    },
    updatedDate:{
        type:Date,
        required:true
    },
});