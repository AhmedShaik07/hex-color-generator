const genbtn = document.getElementById("btn");

genbtn.addEventListener("click", generateColor);

function randomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";

    for(let i=0;i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
        console.log(color);
    }
    return color;
}

function generateColor(){
    const colorBox = document.getElementById("colorBox");
    const colorText = document.getElementById("colorText");
    const body = document.body;
   

    const random = randomColor();
    colorBox.style.backgroundColor = random;
    colorText.textContent = random;
    body.style.backgroundColor = random;
    
}