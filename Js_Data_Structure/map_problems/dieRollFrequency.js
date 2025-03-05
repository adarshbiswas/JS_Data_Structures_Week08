// Simulate rolling a die and count occurrences until one reaches 10 times
let rollCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
let maxRoll = 10, maxNum, minNum;

// Roll the die until any number reaches 10 times
while (!Object.values(rollCount).includes(maxRoll)) {
    let roll = Math.floor(Math.random() * 6) + 1;
    rollCount[roll]++;
}

// Find number with max & min occurrences
maxNum = Object.keys(rollCount).reduce((a, b) => rollCount[a] > rollCount[b] ? a : b);
minNum = Object.keys(rollCount).reduce((a, b) => rollCount[a] < rollCount[b] ? a : b);

console.log("Die Roll Frequency:", rollCount);
console.log(`Number that appeared the most: ${maxNum}`);
console.log(`Number that appeared the least: ${minNum}`);
