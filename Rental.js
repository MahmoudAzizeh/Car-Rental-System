const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({

userFirstname:{
    type:String,
    required:true
},
userLastName:{
    type:String,
    required:true
},
carid:{
    type:Schema.Types.ObjectId,
    ref:'cars',
    required:true
},
userMobileNumber:{
type:Number,
required:true

},


startDate:{
type:Date,
required:true

},

endDate:{
    type:Date,
    required:true
    
    },
});

module.exports = mongoose.model('rental',brandSchema);
