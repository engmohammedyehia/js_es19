const showWelcomeToStudent = ({name, age = 30} = {name: 'Mohammed', age: 45}) => `Welcome to a new year ${name}, you are now ${age}`;

const students = [
    {
        name: 'Ahmed',
        age: 22,
        scores: [19, 18, 19, 20],
        attendenceScore: 98,
    },
    {
        name: 'Mustafa',
        age: 21,
        scores: [23, 16, 32, 22],
        attendenceScore: 74,
    },
    {
        name: 'Ibrahim',
        age: 23,
        scores: [22, 12, 99, 12],
        attendenceScore: 54,
    },
    'Mohammed'
];

for (student of students) {
    console.log(showWelcomeToStudent(student));
}