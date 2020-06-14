
// FIRST-JS-PROJECT
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

// SECOND-JS-PROJECT
let randomGenerator = ["Apparent failure may hold in its rough shell the germs of a success that will blossom in time, and bear fruit throughout eternity.", "To love one's neighbors, to love one's enemies, to love everything - to love God in all His manifestations - human love serves to love those dear to us but to love one's enemies we need divine love.", "It usually takes 100 years to make a law, and then, after it's done its work, it usually takes 100 years to be rid of it." , "Our whole way of life today is dedicated to the removal of risk. Cradle to grave we are supported, insulated, and isolated from the risks of life- and if we fall, our government stands ready with Band-Aids of every size."]

function getQuote() {
    document.getElementById("quotes").innerHTML = randomGenerator
}
