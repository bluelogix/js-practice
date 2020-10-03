// FIRST-JS-PROJECT
function randomColor() {
  console.log("working");
  var randomC = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomC;
}
function changeColor() {
  document.getElementById("change").style.backgroundColor = randomColor();
  document.getElementById("chn").style.backgroundColor = randomColor();
  console.log("did it hit?");
}

// SECOND-JS-PROJECT
let randomGenerator = [
  "Apparent failure may hold in its rough shell the germs of a success that will blossom in time, and bear fruit throughout eternity.",
  "To love one's neighbors, to love one's enemies, to love everything - to love God in all His manifestations - human love serves to love those dear to us but to love one's enemies we need divine love.",
  "It usually takes 100 years to make a law, and then, after it's done its work, it usually takes 100 years to be rid of it.",
  "Our whole way of life today is dedicated to the removal of risk. Cradle to grave we are supported, insulated, and isolated from the risks of life- and if we fall, our government stands ready with Band-Aids of every size.",
];

function getQuote() {
  let randomArr = Math.floor(Math.random() * randomGenerator.length);
  //here we are creating a random array number that takes the length of the array and creates a number, if number exists in array it will display that array element.
  document.getElementById("quotes").innerHTML = randomGenerator[randomArr];
  //here we are using the getelementbyid to use the p tag to display array while array using the onClick method to make them random
}

//THIRD-JS-PROJECT
let start = 0;
document.getElementById("increase").innerHTML = start;

function addCounter() {
  let add = (start += 1);
  document.querySelector("#increase").innerHTML = add;
  console.log("add", start);
}
function subtractCount() {
  let subtract = (start -= 1);
  document.querySelector("#increase").innerHTML = subtract;
}

//FOURTH-JS-PROJECT
//array for images
//same name different numbers?
//not display all images at once
//use on click to move right/left to next image
let sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
slideIndex = 0;
//for loops

function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }    
}

function startSlider() {
    reset()
    sliderImages[0].style.display = 'block';
}
//Previous
function slideLeft() {
    reset();
    sliderImages[slideIndex - 1].style.display = 'block';
    slideIndex--;
}
//Left arrow event listener 
arrowLeft.addEventListener('click', function(){
    if(slideIndex === 0) {
        slideIndex = sliderImages.length;
    }
    slideLeft();
}); 

//Next Slide
function slideRight() {
    reset();
    sliderImages[slideIndex + 1].style.display = 'block';
    slideIndex++;
}
arrowRight.addEventListener('click',  function(){
    if(slideIndex === sliderImages.length - 1) {
        slideIndex = -1;
    }
    slideRight();
});

startSlider();

//FIFTH-JS-PROJECT

//Awaiting proj 
// let addArr = [];
// function addName() {
//   let addQ = document.getElementById("quotes").value;
//   console.log(addQ);
//   addArr.push(addQ);
//   console.log("add", addQ);
// }
// function getName() {
//   alert("welcome" + firstName + lastName + "");
// }
