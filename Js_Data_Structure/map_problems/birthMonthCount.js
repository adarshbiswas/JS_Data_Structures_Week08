// Generate birth months for 50 individuals and group them
let birthMonths = {};

// Assign random birth months (1-12) to 50 individuals
for (let i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1;
    if (!birthMonths[month]) birthMonths[month] = [];
    birthMonths[month].push(`Person${i}`);
}

// Print results
for (let month in birthMonths) {
    console.log(`People born in Month ${month}:`, birthMonths[month]);
}
