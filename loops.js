const months = ['Jan', 'Feb', 'Mar'];

// for ( let i = 0; i < months.length; i++ ) {
//     console.log(months[i]);
// }

// callback function  الدالة التي يتم استخدامها لتنفيذ شئ معين على مجموعة عناصر لاحقا
months.forEach((val, ahmedFeen, myArray, thisAr) => console.log(ahmedFeen, val, myArray, thisAr));

const scores = [
    {
        name: "Ahmed",
        scores: [23, 20, 25]
    },
    {
        name: "Saeed",
        scores: [19, 20, 22]
    },
    {
        name: "Ibrahim",
        scores: [18, 15, 18]
    },
];

for (const {scores: [,,arabic]} of scores) {
    console.log(arabic);
}
