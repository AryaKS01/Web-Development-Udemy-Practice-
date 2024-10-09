const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");
const {v4:uuid}=require("uuid");

app.use(express.urlencoded ({extended:true}))
app.use(express.json())
app.use(methodOverride("_method"))
app.set("views",path.join(__dirname,"views1"));
app.set("view engine","ejs");

let comments=[
    {
        id:uuid(),
        username:"Todd",
        comment:"lol thats funny"
    },
    {
        id:uuid(),
        username:"Skyler",
        comment:"i like to bidwatch"
    },
    {
        id:uuid(),
        username:"Arya",
        comment:"delete this todd "
    },
    {
        id:uuid(),
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
    comments.push({username, comment,id:uuid()})
    // res.send("It worked");
    res.redirect("/comments");
})

app.get("/comments/:id",(req,res)=>{
    const {id}=req.params;
    const comment=comments.find(c=>c.id===id);
    res.render("comments/show",{comment});
})

app.get("/comments/:id/edit",(req,res)=>{
    const {id}=req.params;
    const comment=comments.find(c=>c.id===id);
    res.render("comments/edit",{comment})
})

app.patch("/comments/:id", (req,res)=>{
    const {id}=req.params;
    // console.log(req.body.comment);
    // res.send("updating something!")
    const newCommentText=req.body.comment;
    const foundComment=comments.find(c=>c.id===id);
    foundComment.comment=newCommentText;
    res.redirect("/comments");
})

app.delete("/comments/:id",(req,res)=>{
    const {id}=req.params;
    comments=comments.filter(c=>c.id !==id);
    res.redirect("/comments");

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