// console.log("Hello javascript");
// let total=1+2;
// console.log("Goodbye");
// let rand=Math.random();
// if(rand<1){
//     console.log("math still works");
//     console.log(rand);
// }

// let password=prompt("enter ur password");
// if(password.length>=6){
//     console.log("valid password");
//     if(password.indexOf(" ")===-1){
//         console.log("valid password and no spaces");
//     }else{
//         console.log("valid password but has spaces");
//     }
// }else{
//     console.log("inavalid password");
// }

// for(let i=1;i<10;i++){
//     console.log(i);
// }

// ----------------------------------------------------  GUESSING GAME  ------------------------------------------------

// let max = parseInt(prompt("Enter the Maximum number: "));
// while (!max) {
//   max = parseInt(prompt("Enter a valid number: "));
// }

// const targetNum = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Enter your first guess or 'q' to quit your game ");
// let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") {
//     break;
//   }
//   guess = parseInt(guess);

//   if (guess > targetNum) {
//     attempts++;
//     guess = prompt("Too high! Enter a new guess:");
//   } else if (guess < targetNum) {
//     attempts++;
//     guess = prompt("Too low! Enter a new guess:");
//   } else {
//     guess = prompt("Enter a valid input or type'q' to quit your game");
//   }
// }

// if (guess === "q") {
//   console.log("OK quitting");
// } else {
//   console.log(`You got this it took you ${attempts} guesses `);
// }
// -----------------------------------------------------------------------------------------------------------------

// const animals=["chicken", "cow", "hen", "goat" ];

// for(let x of animals){
//     console.log(x);
// }

// function song(){
//     console.log("ina");
//     console.log("mina");
//     console.log("dika");

// }
// function greet(name){
//     console.log(`hey ${name}`);
// }

// function repeat(str, num){
//     let word="";
//     for(let i=0;i<num;i++){
//        word=word+str;
       
//     }
//     console.log(word);
// }

// let bird="chidiya";
// function birdWatch(){
//     let bird="chiial";
//     console.log(bird);
// }
// birdWatch();
// console.log(bird);

// function callTwice(func){
//     func();
//     func();
// }

// function rollDie(){
//     const roll=Math.floor(Math.random()*3)+1;
//     console.log(roll);
// }
// callTwice(rollDie);

// function makebetFunc(min, max){
//     return function (num){
//         return num>=min && num<=max;
//     }
// }

const myMath={
    PI:3.1485,
    square(num){
        return num*num;
    },
    cube(num){
        return num**3;
    }
}