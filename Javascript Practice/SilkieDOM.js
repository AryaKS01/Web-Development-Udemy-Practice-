// const allImages = document.getElementsByTagName("img");

// for(let img of allImages){
//     // console.log(img.src);
//     img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
// }

// const links = document.querySelectorAll("p a");

// for(let link of links){
//     console.log(link.href);
// }

// const links = document.querySelectorAll("a");

// for(let link of links){
//     // link.innerText="yyoyoyoyoyoyoyoyoyoy!!!!";
//     link.style.color = "green";
    
// }

// const para = document.querySelector("p");
// para.append(" i am text loolololo!!!!!", "Noooooooooooooooo");

// const newB = document.createElement("b");
// newB.append("hiii");

// para.prepend(newB);

// const h2 = document.createElement("h2");
// h2.append("are adrable chickens");

// const h1= document.querySelector("h1");
// h1.insertAdjacentElement("afterend", h2);

//  const li = document.querySelector("li");
//  li.parentElement.removeChild(li);
// const ul = document.querySelector("ul");
// ul.removeChild(li);

const btn = document.querySelector("#v2");

btn.onclick = function(){
    console.log("it worked");
}

function scream(){
    console.log("AAAAAAAAAAAAAAAAAAHH");
}
btn.onmouseenter = scream;