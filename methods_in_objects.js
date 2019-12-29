const obj = {
    name: 'Rehab',
    age: 10,
    showName: function() { 
        return `Welcome ${this.name}`
    },
    showAge: () => `Age is ${this.age}`,
};

console.log(obj.showName());