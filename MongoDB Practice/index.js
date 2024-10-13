const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(()=>{
        console.log("connection Open!!")
    })
    .catch((err)=>{
        console.log("Oh no error");
        console.log(err);
    })

// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
//   console.log("Connection open!!");
// }

// {
//     title:"Amadeus",
//     year:1986,
//     score:9.2,
//     rating:"R"
// }

const movieSchema=new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String

});
const Movie=mongoose.model("Movie",movieSchema);
// const amadeus=new Movie({
//     title:"Amadeus",
//     year:1986,
//     score:9.2,
//     rating:"R"})

// Movie.insertMany([{
//     title:"Amaelie",
//     year:200,
//     score:8.2,
//     rating:"R"
// },{
//     title:"Alien",
//     year:1979,
//     score:8.1,
//     rating:"R" 
// },{
//     title:"The iron giant",
//     year:1999,
//     score:7.5,
//     rating:"PG"
// },{
//     title:"Stand by me",
//     year:1986,
//     score:8.6,
//     rating:"R"
// }])
//     .then((data)=>{
//         console.log("IT WORKED");
//         console.log(data);
//     })

