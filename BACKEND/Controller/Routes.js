const RestudantData=require('../Model/ResturantData');
const router=require('express').Router()
const Joi=require('joi');

//Add restudant data
router.route("/add").post(async(req,res)=>{


const addRestaurantDataSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required()
});
        if(addRestaurantDataSchema.validate(req.body)){
            
            addRestaurantDataSchema.validate(req.body);
        }
        else{
            res.status(400).json("Please provide valid data.");
        }
       
    const {name,phone,address}=req.body;

    const newRestudantData=new RestudantData({
        name,
        phone,
        address
    });

    newRestudantData.save()
    .then(() => {
        res.status(200).json("Restaurant data added successfully.");
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json("Error: Unable to add restaurant data.");
    }); 
})


//Get all restudant data

router.route("/Alldata").get((req, res) => {

    if(RestudantData.find()){

        RestudantData.find().then((restudantData) => {
            res.status(200).json(restudantData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Error: Unable to retrieve restaurant data.");
        })
    }
    else{
        res.status(404).json("Restaurant data not found.");
    }

});


//Delete resturant

router.route("/delete/:id").delete(async(req,res)=>{
    const id=req.params.id;
    await RestudantData.findByIdAndDelete(id).then(() => {
        res.status(200).json("Restaurant data deleted successfully.");
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json("Error: Unable to delete restaurant data.");
    })

})

//Update resturant

router.route("/update/:id").put(async(req,res)=>{
    const id=req.params.id;
    const {name,phone,address}=req.body;
    const updateRestudantData={
        name,
        phone,
        address
    }

    await RestudantData.findByIdAndUpdate(id,updateRestudantData).then(() => {
        res.status(200).json("Restaurant data updated successfully.");
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json("Error: Unable to update restaurant data.");
    })

})

//Get resturant by id

router.route("/get/:id").get(async(req,res)=>{

    const id=req.params.id;

    if(RestudantData.findById(id)){

        await RestudantData.findById(id).then((restudantData) => {
            res.status(200).json(restudantData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Error: Unable to retrieve restaurant data.");
        })
    }
    else{
        res.status(404).json("Restaurant data not found.");
    }

})

module.exports=router;


