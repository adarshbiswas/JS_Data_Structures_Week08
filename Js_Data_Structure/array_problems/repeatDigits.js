// Find numbers with repeated digits in the range 0-100
let repeatedDigits = [];

for (let i = 11; i <= 100; i++) {
    let strNum = i.toString();
    if (strNum.length === 2 && strNum[0] === strNum[1]) {
        repeatedDigits.push(i);
    }
}

console.log("Numbers with repeated digits:", repeatedDigits);
