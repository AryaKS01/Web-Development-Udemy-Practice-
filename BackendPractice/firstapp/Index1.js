const express=require("express");
const app=express();
const path=require("path");

app.use(express.urlencoded ({extended:true}))
app.use(express.json())
app.set("views",path.join(__dirname,"views1"));
app.set("view engine","ejs");

const comments=[
    {
        id:1,
        username:"Todd",
        comment:"lol thats funny"
    },
    {
        id:2,
        username:"Skyler",
        comment:"i like to bidwatch"
    },
    {
        id:3,
        username:"Arya",
        comment:"delete this todd "
    },
    {
        id:4,
        username:"onlysaywoof",
        comment:"woof woof woof"
    }
]

app.get("/comments",(req,res)=>{
    res.render("comments/index1", {comments})
})

app.get("/comments/new",(req,res)=>{
    res.render("comments/new1");
})

app.post("/comments",(req,res)=>{
    // console.log(req.body);
    const {username, comment}=req.body;
    comments.push({username, comment})
    // res.send("It worked");
    res.redirect("/comments");
})

app.get("/comments/:id",(req,res)=>{
    const {id}=req.params;
    const comment=comments.find(c=>c.id===parseInt(id));
    res.render("comments/show",{comment});
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