const arr2 = [7,8,9];

const arr = [1,2,3,4,5,6, ...arr2];

console.log(arr);

const financial = {
    salary: 100,
    tax: 0.01
};

const obj = {
    name: 'Ahmed',
    age: 27
};

console.log({
    ...obj,
    ...financial
});

// ES5

const ar1 = [1,2,3];
const ar2 = [4,5,6];
const ar3 = [7,8,9];

console.log([...ar1, ...ar2, ...ar3]);
