class Human {
    constructor(name, age, address)
    {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getName()
    {
        return `${this.name} is ${this.age} years old`;
    }
}

class FamilyMember extends Human {
    constructor(name, age)
    {
        super(name, age);
    }
}

const mohammed = new FamilyMember('Mohammed', 37, 'Cairo');

console.log(mohammed.getName());