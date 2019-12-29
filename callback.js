const showName = (name, age, decorator) => {
    let welcome = `Welcome to our school ${name}`;
    if (age > 15) {
        welcome += ', you are a senior';
    } else {
        welcome += ', you are a jounior';
    }
    return decorator(welcome);
};

console.log(showName('Ahmed', 22, function(welcomeString) {
    return `<h1>${welcomeString}</h1>`;
}));

console.log(showName('Ahmed', 22, str => `---- ${str} ----`));

/**
 * @param {string} salary 
 * @param {int} tax 
 * @param {callback} extraCalc // this callback accepts an integer (the net salary)
 */
const calculateNetSalary = (salary, tax, extraCalc) => extraCalc(salary - (salary * tax / 100));

console.log(calculateNetSalary(3000, 20, netsalary => netsalary - 100));