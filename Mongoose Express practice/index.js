const express=require ("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");

const Product=require("./models/product");

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(()=>{
        console.log("Mongo connection Open!!")
    })
    .catch((err)=>{
        console.log("Oh no mongo error");
        console.log(err);
    })


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))

app.get("/products",async (req,res)=>{
    const products=await Product.find({})
    // console.log(products)
    res.render("products/index",{products});
})

app.get("/products/new",(req,res)=>{
    res.render("products/new")
})

app.post("/products",async (req,res)=>{
    // console.log(req.body)
    const newproduct=new Product(req.body);
    await newproduct.save();
    // console.log(newproduct);
    // res.send("making your product!")
    res.redirect(`/products/${newproduct._id}`)
})

app.get("/products/:id", async(req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id)
    res.render("products/show",{product})
})

app.listen(3000,()=>{
    console.log("App is listening port 3000");
})