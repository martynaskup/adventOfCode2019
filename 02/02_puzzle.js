console.log('Origin puzzleData', puzzleData);

// PART 1
// replace the pos 1 and 2 with values 12 before running the program
puzzleData[1] = 12;
puzzleData[2] = 2;

// change the puzzleData accordingly to opcode
const puzzleEnd = puzzleData.length;
for (i = 0; i < puzzleEnd; i = i + 4) {
  let opcode = puzzleData[i];
  let first = puzzleData[i + 1];
  let second = puzzleData[i + 2];
  let position = puzzleData[i + 3];

  if (opcode === 1) {
    puzzleData[position] = puzzleData[first] + puzzleData[second];
  } else if (opcode === 2) {
    puzzleData[position] = puzzleData[first] * puzzleData[second];
  } else if (opcode === 99) {
    i = puzzleEnd - 4;
  } else {
    console.log('the opcode is invalid (nor 1 nor 2 nor 99');
  }
}

console.log('Endversion of puzzledata', puzzleData);
console.log('puzzleData[0] is ', puzzleData[0]);

// PART 2

// add the solutions to the HTML
const sol1 = document.getElementById('sol1');
const sol2 = document.getElementById('sol2');
sol1.innerHTML += ` <b>${puzzleData[0]}</b>`; // 3716293
sol2.innerHTML += ` <b></b>`; // result
