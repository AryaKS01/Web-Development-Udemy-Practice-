const express=require("express");
const app=express();
const path=require("path");

app.use(express.urlencoded ({extended:true}))
app.use(express.json())
app.set("views",path.join(__dirname,"views1"));
app.set("view engine","ejs");

const comments=[
    {
        username:"Todd",
        comment:"lol thats funny"
    },
    {
        username:"Skyler",
        comment:"i like to bidwatch"
    },
    {
        username:"Arya",
        comment:"delete this todd "
    },
    {
        username:"onlysaywoof",
        comment:"woof woof woof"
    }
]

app.get("/comments",(req,res)=>{
    res.render("comments/index1", {comments})
})

app.get("/tacos", (req,res)=>{
    res.send("Get /tacos response")
})

app.post("/tacos",(req,res)=>{
    const {meat,qty}=req.body;
    res.send(`Ok, here are your ${qty} ${meat} tacos`)
})

app.listen(1010, ()=>{
    console.log("ON PORT 1010!")
})