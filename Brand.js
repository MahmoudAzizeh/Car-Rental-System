const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({

    name:{
        type:String,
        required : true
    },

    description:{
        type:String,
        required:true
    },
    showNbCars:{
        type:Number,
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
module.exports = mongoose.model('brand',brandSchema);
