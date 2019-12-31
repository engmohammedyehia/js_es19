const a1 = {
    name:'ahmed',
    age : 20,
    salary: 3000,
};

const a2 = {
    name : 'mohamed',
    age : 30
};

const a3 = {
    name:'ahmed',
    age : 20
};

const compareObjects = (obj1, obj2) => {
    for (const prop in obj1) {
        if(obj1[prop] !== obj2[prop]) {
            return false;
        }
    };
    return true;
};

console.log(compareObjects(a1, a3));

// CSV (comma separated values)   mohammed,5000,01001823786,1000

// mohammed,5000,01001823786,1000
// rehab,5000,01001823786,1000

const csv = 'mohammed,5000,01001823786,1000'; // 2d => ['mohammed', 5000, 01001823786, 1000]

const names = [
    {
        name:'ahmed',
        age : 20,
        salary: 3000,
    },
    {
        name : 'mohamed',
        age : 30
    },
    {
        name:'ahmed',
        age : 20,
        success: true,
        attended: false,
    }
];

// ahmed,20,mohammed,30,ahmed,const

const testobj = (obj1)=>{
    let csv = '';
    for (var i = obj1.length - 1; i >= 0; i--) {
        for (const prop in obj1[i]) {
            csv += `${obj1[i][prop]},`;
        }
    }
    return csv;
}

console.log(testobj(names));

const strToRotatr = 'w3resource';
let resultRotatedString = '';
for (let i = strToRotatr.length - 1; i >= 0; i--) {
    resultRotatedString += strToRotatr[i];
}

console.log(resultRotatedString);

// const resultconvert = str =>{
// 	let b = '';
// 	for (let i = 0; i < str.length; i++){
// 		let c = str.length -1 - i;
// 		b+=str[c];
// 	}
// 	return b;
// }
// console.log(resultconvert('ahmed ali saeed'));

// // DRY Don't repeat yourself (Duplicate code)
// // Don't Re-invent the wheel 
// console.log('ahmed ali saeed'.split('').join('|'));


