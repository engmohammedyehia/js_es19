// const multiplyBy = (val, multiplier) => {
//     if(multiplier === undefined) {
//         multiplier = 5;
//     }
//     return val * multiplier;
// };

const multiplyBy = (val = 2, multiplier = 5) => val * multiplier;

console.log(multiplyBy(3, 8));