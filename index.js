

function randomColor() {
    console.log("working")
    var randomC = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomC;
    
}
   function changeColor() {
    document.getElementById("change").style.backgroundColor = randomColor();
    document.getElementById("chn").style.backgroundColor = randomColor();
    console.log("did it hit?")
}
 

