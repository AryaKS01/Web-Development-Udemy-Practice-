// const express=require("express");
// const app=express();

// // app.use((req,res)=>{
// //     console.log("We got a request")
// //     res.send("hello we got ur request this is a response")
// // })

// app.get("/cats",(req, res)=>{
//     const{q}=req.query;
//     res.send(`MEOW!!!!! reults for ${q} query`);
// })
// app.get("/r/:subreddit",(req,res)=>{
//     console.log(req.params);
//     res.send("this is a subreddittt");
// })

// app.listen(3000,()=>{
//     console.log("Listenening on PORT 3000");
// })

const express=require("express");
const app=express();
const path=require("path");
const redditData=require("./data.json");
// console.log(redditData);

app.use(express.static(path.join(__dirname,"public")));


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    const num=Math.floor(Math.random()*10)+1;
    res.render("home",{n:num})
})
 
app.get("/cats",(req,res)=>{
    const cats=[
        "Blue","Rocket","Monty","Stephanie","Winston"
    ]
    res.render("cats",{cats})
})


app.get("/r/:subreddit",(req,res)=>{
    const {subreddit}=req.params;
    const data=redditData[subreddit];
    // console.log(data);
    if(data){
        res.render("subreddit",{...data} );
    }else{
        res.render("not found",{subreddit});
    }
    
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})