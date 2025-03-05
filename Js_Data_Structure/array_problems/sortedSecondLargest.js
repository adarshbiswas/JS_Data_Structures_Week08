// Generate 10 random 3-digit numbers, sort, and find 2nd largest & 2nd smallest
let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);
console.log("Generated Numbers:", numbers);

numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", numbers);

console.log(`Second Smallest: ${numbers[1]}, Second Largest: ${numbers[numbers.length - 2]}`);
