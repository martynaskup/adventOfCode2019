console.log('Origin puzzleData', puzzleData);

const puzzleEnd = puzzleData.length;

// change the puzzle array accordingly to opcode
function steps(puzzle, pointer, first, second, position) {
  if (pointer === 1) {
    puzzle[position] = puzzle[first] + puzzle[second];
  } else if (pointer === 2) {
    puzzle[position] = puzzle[first] * puzzle[second];
  } else if (pointer === 99) {
    i = puzzleEnd - 4;
  } else {
    console.log('the opcode is invalid (nor 1 nor 2 nor 99');
  }
}

// PART 1
// clone the original puzzleData array
const puzzleDataPart1 = puzzleData.slice();

// replace the pos 1 and 2 with values 12 before running the program
puzzleDataPart1[1] = 12;
puzzleDataPart1[2] = 2;

// find the end value for the 0-position in the puzzle Array
// after mapping through the array
function puzzleZero(puzzles) {
  for (i = 0; i < puzzleEnd; i = i + 4) {
    let opcode = puzzles[i];
    let one = puzzles[i + 1];
    let two = puzzles[i + 2];
    let three = puzzles[i + 3];
    steps(puzzles, opcode, one, two, three);
  }
}
puzzleZero(puzzleDataPart1);

console.log('Endversion of puzzledataPart1', puzzleDataPart1);
console.log('puzzleDataPart1[0] is ', puzzleDataPart1[0]);

// PART 2
// output to be found caused by (noun + verb)
const output = 19690720;

let puzzleDataPart2 = [];
function findOutput() {
  let puzzleDataNewNoun = [];
  let puzzleDataNewVerb = [];
  for (let noun = 0; noun <= 99; noun++) {
    puzzleDataNewNoun = puzzleData.slice();
    puzzleDataNewNoun[1] = noun;
    for (let verb = 0; verb <= 99; verb++) {
      puzzleDataNewVerb = puzzleDataNewNoun.slice();
      puzzleDataNewVerb[2] = verb;
      puzzleZero(puzzleDataNewVerb);
      if (puzzleDataNewVerb[0] === output) {
        return (puzzleDataPart2 = puzzleDataNewVerb);
      }
    }
  }
}
findOutput();

let noun = puzzleDataPart2[1];
let verb = puzzleDataPart2[2];
let solutionPart2 = 100 * noun + verb;
console.log('solutionPart2', solutionPart2);

// add the solutions to the HTML
const sol1 = document.getElementById('sol1');
const sol2 = document.getElementById('sol2');
sol1.innerHTML += ` <b>${puzzleDataPart1[0]}</b>`; // 3716293
sol2.innerHTML += ` <b>${solutionPart2}</b>`; // 6431
