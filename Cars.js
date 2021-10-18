const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({

title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
numberOfRentals:{
    type:String,
    required:true
},
brandid:{
    type:Schema.Types.ObjectId,
    ref:'brand',
    required:true
},
categoryid:{
    type:Schema.Types.ObjectId,
    ref:'Category',
    required:true
},
});