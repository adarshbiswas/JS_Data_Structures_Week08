// Find triplets whose sum is zero
let numbers = [-1, 0, 1, 2, -1, -4];
let triplets = [];

for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
        for (let k = j + 1; k < numbers.length; k++) {
            if (numbers[i] + numbers[j] + numbers[k] === 0) {
                triplets.push([numbers[i], numbers[j], numbers[k]]);
            }
        }
    }
}

console.log("Triplets whose sum is zero:", triplets);
