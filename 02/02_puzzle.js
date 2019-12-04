console.log('Origin puzzleData', puzzleData);

// PART 1
// replace the pos 1 and 2 with values 12 before running the program
const puzzleDataPart1 = puzzleData;
puzzleDataPart1[1] = 12;
puzzleDataPart1[2] = 2;

// change the puzzleDataPart1 accordingly to opcode
const puzzleEnd = puzzleDataPart1.length;
for (i = 0; i < puzzleEnd; i = i + 4) {
  let opcode = puzzleDataPart1[i];
  let first = puzzleDataPart1[i + 1];
  let second = puzzleDataPart1[i + 2];
  let position = puzzleDataPart1[i + 3];

  if (opcode === 1) {
    puzzleDataPart1[position] =
      puzzleDataPart1[first] + puzzleDataPart1[second];
  } else if (opcode === 2) {
    puzzleDataPart1[position] =
      puzzleDataPart1[first] * puzzleDataPart1[second];
  } else if (opcode === 99) {
    i = puzzleEnd - 4;
  } else {
    console.log('the opcode is invalid (nor 1 nor 2 nor 99');
  }
}

console.log('Endversion of puzzledataPart1', puzzleDataPart1);
console.log('puzzleDataPart1[0] is ', puzzleDataPart1[0]);

// PART 2
let noun = puzzleDataPart1[1];
let verb = puzzleDataPart1[2];

// add the solutions to the HTML
const sol1 = document.getElementById('sol1');
const sol2 = document.getElementById('sol2');
sol1.innerHTML += ` <b>${puzzleDataPart1[0]}</b>`; // 3716293
sol2.innerHTML += ` <b></b>`; // result
