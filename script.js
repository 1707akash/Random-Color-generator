

for(let i=0; i<30; i++){
    let colorBox = document.createElement("div");
    let colorContainer= document.getElementById("outerDiv");

    colorBox.classList.add("color-box");
    colorContainer.appendChild(colorBox);
}

let allDivs= document.querySelectorAll(".color-box");

allDivs.forEach((div)=>{
    let newColor = colorMAker();
    div.style.backgroundColor = newColor;
    div.innerHTML= newColor;
})



function colorMAker(){
    let str= "0123456789abcdef";
    let hexCode = "#";

    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random()*str.length);
        hexCode+= str[randomIndex];
    }
    return hexCode;
}

