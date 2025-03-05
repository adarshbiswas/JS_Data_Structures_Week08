// Generate 10 random 3-digit numbers and find 2nd largest & 2nd smallest without sorting
let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);
console.log("Generated Numbers:", numbers);

let largest = -Infinity, secondLargest = -Infinity;
let smallest = Infinity, secondSmallest = Infinity;

for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }

    if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
    }
}

console.log(`Second Largest: ${secondLargest}, Second Smallest: ${secondSmallest}`);
