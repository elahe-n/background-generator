// This function returns a random Number between 0 (inclusive) and the argument passed to the function, minus 1
// If no argument is passed, 256 is set, ie, returns a number between and including 0 to 255
// 		For example: 
//    getRandomColorChannel(5) will return either 0, 1, 2, 3, 4
const getRandomColorChannel = function(options=256)
{
  return Math.floor( Math.random() * options )
}

// Here's a test number, check the console to see the result
console.log( getRandomColorChannel() )

const setNewColour= function()
{
const r= getRandomColorChannel()
const g= getRandomColorChannel()
const b= getRandomColorChannel()

const theColor= `rgb(${r}, ${g}, ${b})`

document.querySelector("body").style.backgroundColor=theColor
document.querySelector("output").textContent=theColor
}

button=document.querySelector(".btn")
button.addEventListener(`click`,setNewColour)

// setInterval(setNewColour,1000);





// COMPLETE THE FOLLOWING STEPS

// 1) Write an rgb-color string using `getRandomColorChannel()` that can be set as the value for `background-color` in CSS

// 2) Update user interface (the `document`), setting the new colour string to the body's background-color property

// 3) Use the three individual RGB numbers to update the HTML element "rgb(###, ####, ###)" (replacing ###s with the values)

// 4) Wrap the entire procedure in a function named `setNewColour()`, call it multiple times from the `console` to test

//  GIVEN THIS STRING: `rgb(123, 45, 211)`

//  a) Apply this string to the #output element's textContent property

//  b) Apply this string to the body element's style.backgroundColor property