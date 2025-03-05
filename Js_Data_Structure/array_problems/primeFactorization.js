// Compute prime factors of a number and store in an array
const num = parseInt(process.argv[2]);
let n = num, factors = [];

for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
        factors.push(i);
        n /= i;
    }
}
if (n > 1) factors.push(n);

console.log(`Prime Factors of ${num}:`, factors);
