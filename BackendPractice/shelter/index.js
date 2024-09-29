// const blue=require("./blue");
// const janet=require("./janet");
// const sadie=require("./sadie");

// const allCats=[blue, janet,sadie];
// console.log(allCats);

const jokes=require("give-me-a-joke");
const colors=require("colors");
// console.dir(jokes);
jokes.getRandomDadJoke(function(joke){
    console.log(joke.rainbow);
})