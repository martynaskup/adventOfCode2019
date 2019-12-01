// myPuzzle comes from js file with puzzle data
const puzzle = myPuzzle;

// Part 1
const allFuel = puzzle.reduce((acc, mass) => {
  let massFuel = Math.floor(mass / 3) - 2;
  return acc + massFuel;
}, 0);
console.log(allFuel);

// add the solutions to the HTML
const sol1 = document.getElementById('sol1');
const sol2 = document.getElementById('sol2');
sol1.innerHTML += ` <b>${allFuel}</b>`;
sol2.innerHTML += ` <b>  </b>`;
