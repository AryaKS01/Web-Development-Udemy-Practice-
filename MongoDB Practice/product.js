const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(()=>{
        console.log("connection Open!!")
    })
    .catch((err)=>{
        console.log("Oh no error");
        console.log(err);
    })

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories:[String]
});

const Product=mongoose.model("Product",productSchema);

const bike=new Product({name:"Mountain Bike",price:599,categories:["cycling","Safety",658]})
bike.save()
    .then(data=>{
        console.log("IT woked")
        console.log(data);
    })
    .catch(err=>{
        console.log("Oh no ERROR")
        console.log(err)
    })