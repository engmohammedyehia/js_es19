console.log([1, 2, 3, 4, 5].copyWithin(-2));

// [3,4] من اول العنصر -2



// target start end
// copyWithin(-4, -3);

//  0   1   2   3   4
  [ 1,  2,  3,  4,  5]
// -5  -4  -3  -2  -1

// 

// console.log([1,2,3,4,5,6,7].fill(8,2,4));

const vegetables = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
const lastElement = vegetables.pop();
console.log(vegetables, lastElement);

vegetables.push('tomato', 'carrot', 'cucamber');
console.log(vegetables);

const firstElement = vegetables.shift();
console.log(vegetables, firstElement);

vegetables.unshift('broccoli', 'zuccini');
console.log(vegetables);

console.log([1,2,3,4,5,6].reverse());

const xArr = [1,3,5,7,9];
const yArr = xArr.splice(-3,2,4,6,8,10,12);
// 1, 3, 4, 6, 8, 7, 9
console.log(xArr);