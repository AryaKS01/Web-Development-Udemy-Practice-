const express=require("express");
const app=express();

// app.use((req,res)=>{
//     console.log("We got a request")
//     res.send("hello we got ur request this is a response")
// })

app.get("/cats",(req, res)=>{
    const{q}=req.query;
    res.send(`MEOW!!!!! reults for ${q} query`);
})
app.get("/r/:subreddit",(req,res)=>{
    console.log(req.params);
    res.send("this is a subreddittt");
})

app.listen(3000,()=>{
    console.log("Listenening on PORT 3000");
})