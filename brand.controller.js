const brands =require('../models/Brand');




exports.getAllBrand = (req,res,next)=>{
    brands.find()
    .then(brand =>{
        console.log(brand);
        res.send(brand);
    })
    .catch(err =>{
        console.log(err);
    });
};
    
exports.postAddBrand = (req,res,next)=>{
    const {name,description,showNbCars,createdDate,updatedDate} = req.body;
    const Brand = new brands({
            name : name,
             description:description,
             showNbCars:showNbCars,
             createdDate: new Date(),
            updatedDate:null,
 });
 Brand.save()
 .then(result=>{
    console.log("created");
    console.log(result);
    res.send(result);
})
.catch(err=>{
    console.log(err);

});
};
exports.postEditBrand = (req,res,next)=>{
    const {brandsId,name,description,showNbCars,createdDate,updatedDate} = req.body;
 
    brands.findById(brandsId)
 .then(brands=>{
    brands.name = name;
    brands.description = description;
    brands.showNbCars = showNbCars;
    brands.createdDate = createdDate;
    brands.updatedDate = updatedDate;
    console.log("created");
    console.log(brands);
    return brands.save();
}).then(result =>{
    console.log("updated");
    res.send(result);   
})
.catch(err=>{
    console.log(err);

});
};


exports.postDeleteBrand =(req,res,next)=>{
const brandId =req.body.brandsId;
 brands.findByIdAndRemove(brandId).then(()=>{
     console.log("deleted");
     res.send("done")
}).catch(err =>console.log(err));
};