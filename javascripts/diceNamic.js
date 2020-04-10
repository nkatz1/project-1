// jshint esversion: 7

//define helper functions here

let rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;

  //your code from P2 goes here
};
let controller = () => {
  let target,
    die1,
    die2,
    rollCount = 0,
    die1URL,
    die2URL,
    imgElem1,
    imgElem2,
    cheeryOutput;

  //Define a controller to handle the button click
  //Input: prompt the user for cost and diameter
  target = document.querySelector("input").value;
  console.log(target);

  do {
    die1 = rollDie();
    die2 = rollDie();
    rollCount++;
    //console.log(`${die1} ${die2} ${rollCount}`);
    console.log(`d1 =  ${die1} d2 =  ${die2} ${rollCount}`);
  } while (die1 + die2 != target);

  die1URL = `images/die${die1}.gif`;
  imgElem1 = document.querySelector("img");
  imgElem1.setAttribute("src", die1URL);

  die2URL = `images/die${die2}.gif`;
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);

  cheeryOutput = `You hit your number in ${rollCount} rolls`;
  document.querySelector("div").innerHTML = cheeryOutput;
};

//Processing: assemble the result string
//use <br> in the result string for html newline

//Output: write the result string into the empty div

//Register the controller after the DOM is complete
window.addEventListener("load", () => {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
