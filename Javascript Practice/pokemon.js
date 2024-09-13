// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for(let i=1;i<=151;i++){
    const poke = document.createElement("div");
    poke.classList.add("pokemon");
    const label =document.createElement("span");
    label.innerText = `#${i}`;
    const img = document.createElement("img");
    img.src = `${baseURL}${i}.png`;
    container.appendChild(poke);
    poke.appendChild(img);
    poke.appendChild(label);
    
}