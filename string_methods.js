// Concatination using concat 
console.log(''.concat('Mohammed', 'is', 'not', 'old'));
const stringStart = '';
console.log(stringStart.concat('Mohammed', ' is', ' not', ' old'));
console.log(`${stringStart}`);

// Ends with 
const sentence = 'I would like to check the ending of this';
console.log(sentence.endsWith('this'));

// includes
console.log(sentence.includes('e', 26));

// a workaround (silly workaround)
console.log('hello world'.indexOf('', 1000000) === 'hello world'.length);

console.log('canalalalalaksjdfalh'.lastIndexOf('al'));
console.log('canal'.indexOf('a'));

let sentence2 = 'I was going to the school Yesterday 3 times back and forth. On the 11th of this month.'
sentence2 = sentence2.replace(/b[a-zA-Z]{2}k/g, 'zuruck');
console.log(sentence2.match(/b[a-zA-Z]{2}k/g));


const toBeRepeated = 'Mohammed';
const repeatedString = toBeRepeated.repeat(4);
console.log(repeatedString);
console.log(toBeRepeated);

const replacingStr = 'This is it';
console.log(replacingStr.replace('This', (foundString) => {
    return 'Mohammed';
}));

