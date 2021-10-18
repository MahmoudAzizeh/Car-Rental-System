const catergory = require('../models/category');

exports.postAddCategory = (req,res,next)=>{
   
const {name,description,createdDate,updatedDate} = req.body;

const catergorycat = new catergory({
    name : name,
    description:description,
    createdDate: new Date(),
    updatedDate:null,
}
);
catergorycat.save()
.then(result=>{
    console.log("created");
    console.log(result);
    res.send(result);
})
.catch(err=>{
    console.log(err);

});
};

exports.getAllCategory = (req,res,next)=>{
catergory.find()
.then(catergorys =>{
    console.log(catergorys);
    res.send(catergorys);
})
.catch(err =>{
    console.log(err);
});
};