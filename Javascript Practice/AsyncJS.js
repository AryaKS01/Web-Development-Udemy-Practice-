// setTimeout(()=>{
//     document.body.style.backgroundColor="red"; 
//     setTimeout(()=>{
//         document.body.style.backgroundColor="orange"; 
//     },1000)
// },1000)

// const delayColor = (color, delay, doNext) =>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor=color;
//         doNext && doNext();
//     }, delay)
// }

// delayColor("red", 1000,()=>{
//     delayColor("orange", 1000,()=>{
//         delayColor("green", 1000,()=>{
//             delayColor("blue", 1000)
//         })
//     })
// })

// const fakeRequestPromise=(url)=>{
//     return new Promise((resolve, reject) =>{
//         const delay=Math.floor(Math.random() * (4500))+500;
//         setTimeout(()=>{
//             if(delay >4000){
//                 reject("Connection Timeout :(");
//             }else{
//                 resolve(`here is your fake data ${url}`)
//             }
//         },delay)
//     })
// }

// const req =fakeRequestPromise("ggolr/api/true");

// fakeRequestPromise("ggolr/api/true")
//         .then(()=>{
//         console.log("it worked");
//             return fakeRequestPromise("anhow");
//         })
//         .then(()=>{
//             console.log("it worked page 2");
//             return fakeRequestPromise("udbfcol");
//         })
//         .then(()=>{
//             console.log("now it worked");
//         })
//         .catch(()=>{
//             console.log("erorororor");
//         })

// const fakeRequest = (url)=>{
//     return new Promise((resolve, reject)=>{
//        const rand =Math.random();
//         setTimeout(()=>{
//            if(rand < 0.7){
//                 resolve("fakekekek fake");
//            } 
//             reject("rejecetd error")
//         },1000)
//     })
// }

// fakeRequest("google/api/fish1")
//     .then((data)=>{
//         console.log("done with req.");
//         console.log("data is",data);
//     })
//     .catch((err)=>{
//         console.log("ohh nOO",err);
//     })

// const sing=async ()=>{
    
//     throw "uh ohhhh";
//     return "lalala";
// }

// sing()
//     .then((data)=>{
//         console.log("promise resolved", data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

const login=async (username, password)=>{
    if(!username || !password){
        throw "missing credentials";
    }else if(password === "okk"){
        return "welcome!";
    }
    throw "invalid password";
}

login("sfcsdfe","okk")
    .then((data)=>{
        console.log("looged in");
        console.log(data);
    })
    .catch((err)=>{
        console.log("ERROR");
        console.log(err);
    })