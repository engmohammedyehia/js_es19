// console.log([1, 2, 3, 4, 5].copyWithin(-2));

// // [3,4] من اول العنصر -2



// // target start end
// // copyWithin(-4, -3);

// //  0   1   2   3   4
//   [ 1,  2,  3,  4,  5]
// // -5  -4  -3  -2  -1

// // 

// // console.log([1,2,3,4,5,6,7].fill(8,2,4));

// const vegetables = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// const lastElement = vegetables.pop();
// console.log(vegetables, lastElement);

// vegetables.push('tomato', 'carrot', 'cucamber');
// console.log(vegetables);

// const firstElement = vegetables.shift();
// console.log(vegetables, firstElement);

// vegetables.unshift('broccoli', 'zuccini');
// console.log(vegetables);

// console.log([1,2,3,4,5,6].reverse());

// const xArr = [1,3,5,7,9];
// const yArr = xArr.splice(-3,2,4,6,8,10,12);
// // 1, 3, 4, 6, 8, 7, 9
// console.log(xArr);

// const arr = [1,2,3,4];

// console.log(arr.concat(5,6,7, [8,9,10], [11]));

// let num1 = [[1]];
// const num2 = [2, [3]];

// const numbers = num1.concat(num2);

// // console.log(numbers);
// // results in [[1], 2, [3]]

// // modify the first element of num1
// num1.push([11,12,13]);
// // num1[0].push(6);
// num1[0].push(8);

// console.log(numbers);
// // results in [[1, 4], 2, [3]]

// const student1 = [
//   {
//     name: 'Ahmed',
//     address: 'Cairo',
//   }
// ]

// const student2 = [
//   {
//     name: 'Yahia',
//     address: 'Alexandria',
//   }
// ];

// const students = student1.concat(student2);
// const newStudents = student1.concat(student2);

// console.log(students, newStudents);

// student1[0].age = 10;

// console.log(students, newStudents);

// console.log([].join());

// console.log([1,2,3,4,5,6,4,7,8,4].indexOf(4, -2)); // 3
// console.log([1,2,3,4,5,6,4,7,8,4].lastIndexOf(4, -6)); // 6

// shallow copy
// const arr = [1,2,3,4,5,6];
// const arr2 = arr.slice(3, 5);

// // arr[3] = 100;

// console.log(arr, arr2);

// console.log([1,true,1.3,0b111,0x1AF,{name: 'ahmed'},NaN].toString());

// console.log(new Date('21 Dec 1997 14:12:00 UTC').toLocaleDateString('de'));

const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('ar', {timeZone: "UTC"});
console.log(localeString);