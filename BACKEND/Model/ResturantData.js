const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const RestudantData=new sheet({

    name:{
        type:String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },

});

const Restudant_Datas=mongoose.model("Restudant_Data",RestudantData);
module.exports=Restudant_Datas;