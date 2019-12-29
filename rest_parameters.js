const calculateNumbers = (num1, num2, ...numbers) => {
    let total = num1 + num2;
    for (var i=0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};

console.log(calculateNumbers(1,2));

const youAreSuccessfull = (name, schoolName, total, ...extraScore) => {
    for (var i=0; i < extraScore.length; i++) {
        total += extraScore[i];
    }
    return `Welcome ${name} from ${schoolName} your success rate is ${total}`
};

console.log(youAreSuccessfull('Mohammed', 'Cairo', 30));
console.log(youAreSuccessfull('Ahmed', 'Alex', 30, 20));
console.log(youAreSuccessfull('Ibrahim', 'Mansura', 30, 20, 10));