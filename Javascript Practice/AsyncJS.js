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

// const login=async (username, password)=>{
//     if(!username || !password){
//         throw "missing credentials";
//     }else if(password === "okk"){
//         return "welcome!";
//     }
//     throw "invalid password";
// }

// login("sfcsdfe","okk")
//     .then((data)=>{
//         console.log("looged in");
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log("ERROR");
//         console.log(err);
//     })

// const req=new XMLHttpRequest();

// req.onload=function(){
//     console.log("it loaded!");
//    const data= JSON.parse(this.responseText);
//    console.log(data);
// }
// req.oneerror=function(){
//     console.log("error!!");
//     console.log(this);
// }

// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

// fetch("https://swapi.dev/api/people/1/")
//     .then((res)=>{
//         console.log("resolved",res);
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((e)=>{
//         console.log("eroor",e);
//     })

    // const loadStarWarsPeople=async()=>{
    //     try{
    //         const res=await fetch("https://swapi.dev/api/people/1/");
    //         const data=await res.json();
    //         console.log(data);
    //         const res2=await fetch("https://swapi.dev/api/people/2/");
    //         const data2=await res2.json();
    //         console.log(data2);}
    //     catch(e){
    //         console.log("error", e);

    //     }
    // }
    // loadStarWarsPeople();

    // axios.get("https://swapi.dev/api/people/1/")
    //     .then((res)=>{
    //         console.log("resolved", res);
    //     })
    //     .catch((e)=>{
    //         console.log("error",e);
    //     })

    // const jokes =document.querySelector("#jokes");

    // const dadJokes=async()=>{
    //     const config={ headers: {Accept:"application/json"}}
    //     const res=await axios.get("https://icanhazdadjoke.com/", config );
    //     // console.log(res.data.joke);
    //     const newLi=document.createElement("li");
    //     newLi.append(res.data.joke);
    //     jokes.append(newLi);
    // }

    // const jokes =document.querySelector("#jokes");
    // const button=document.querySelector("button");

    // const addNewJoke= async()=>{
    //     const jokeText= await dadJokes();
    //     // console.log(jokeText);
    //     const newLi=document.createElement("li");
    //     newLi.append(jokeText);
    //     jokes.append(newLi);
    // }

    // const dadJokes=async()=>{
    //     try{
    //         const config={ headers: {Accept:"application/json"}}
    //         const res=await axios.get("https://icanhazdadjoke.com/", config );
    //         return res.data.joke;
    //     }catch(e){
    //         return "no jokes available SORY;<"
    //     }
        
    // }
    // button.addEventListener("click",addNewJoke);

    const form=document.querySelector("#searchForm");
    form.addEventListener("submit",async function(e){
        e.preventDefault();
        const searchTerm=form.elements.query.value;
        const config={params:{q:searchTerm}}
        const res=await axios.get(` https://api.tvmaze.com/search/shows`,config);
        makeImg(res.data);
        form.elements.query.value="";
        
    })

    const makeImg=(shows)=>{
        for(let result of shows){
            if(result.show.image){
            const img=document.createElement("img");
            img.src=result.show.image.medium;
            document.body.append(img);
            }
        }
    }
