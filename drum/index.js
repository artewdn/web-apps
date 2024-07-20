
// let numberOfDrumButtons = document.querySelectorAll(".drum").length;


// DETECTING BUTTON CLICK

for (let i = 0 ; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let soundButton = this.innerHTML;
    makeSound(soundButton);
    // console.log(soundButton);
    buttonAnimation(soundButton);
  });
};


// DETECTING KEYBOARD PRESS

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})


function makeSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
      
    case "a":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "j":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "k":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default: console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("."+ currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
