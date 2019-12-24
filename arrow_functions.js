const mohammed = {
    name: "Mohammed Ibrahim",
    age: 23,

    showWelcome: function()
    {
        return `Welcome to our website ${this.name}`
    },
};

console.log(mohammed.showWelcome());

// function UiComponent (multi) {
//     return 1 * multi;
// }

// تعريف ال arrow functions 
// ex1
// تعريف الدالة بدون اي باراميتارز و سطر ناتج واحد
let func = () => 1;

// ex2 
func = (num) => num * 3;
func = num => {
    return num * 3
};
func = (num) => {
    return num * 3
};
func = num => num * 3;

// ex3 
func = (num1, num2) => num1 * num2;
func = (num1, num2) => {
    return num1 * num2;
};

// ex4 
func = (num1, num2) => {
    const result = num1 * num2;
    return 3 * result;
};

const UiComponent = multi => 1 * multi;

console.log(UiComponent(4));

const testArrow = () => console.log(this);
testArrow();

const arr = [1,2,3,4,5];
let arrBy2 = arr.map(
    function (val) { 
        return val * 2; 
    }
);
arrBy2 = arr.map(val => val * 2);

console.log(arrBy2);