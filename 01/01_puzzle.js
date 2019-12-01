// myPuzzle comes from js file with puzzle data
const puzzle = myPuzzle;

let massFuel = mass => Math.floor(mass / 3) - 2;

// PART 1
const allFuelPart1 = puzzle.reduce((acc, mass) => {
  return acc + massFuel(mass);
}, 0);
console.log('allFuelPart1: ', allFuelPart1);

// PART 2
const allFuelPart2 = puzzle.reduce((acc, mass) => {
  // calculate the total fuel for a separate mass from the array
  let allMassFuel = 0;
  let calcFuel = mass => {
    let fuelForThisMass = massFuel(mass);

    // stop executing the function if fuel is <= 0
    if (fuelForThisMass <= 0) {
      return;
    }

    allMassFuel += fuelForThisMass;
    calcFuel(fuelForThisMass);
  };
  calcFuel(mass);

  // add the separate total mass fuel to the total fuel
  return (acc += allMassFuel);
}, 0);
console.log('allFuelPart2: ', allFuelPart2);

// add the solutions to the HTML
const sol1 = document.getElementById('sol1');
const sol2 = document.getElementById('sol2');
sol1.innerHTML += ` <b>${allFuelPart1}</b>`; // 3371958
sol2.innerHTML += ` <b>${allFuelPart2}</b>`; // 5055050
