const defaultObj = (studentName) => ({name: studentName, age: 15});
const defaultSubjects = () => ['Math', 'Science', 'Sports'];

// Destructuring 
const person = defaultObj('ahmed'); // {name: 'ahmed', age: 15}
const {name: personName} = defaultObj('ahmed'); // {name: 'ahmed', age: 15}
const [sub1] = defaultSubjects();
const subjects = defaultSubjects();
console.log(person.name, personName, sub1, subjects[0]);