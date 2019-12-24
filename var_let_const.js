// var x = 3;
// function func(randomize) {
//     if (randomize) {
//         var x = Math.random(); // (A) scope: whole function
//         return x;
//     }
//     return x; // accesses the x from line A
// }
// console.log(func(false)); // undefined

// self-invoked functions
// IIFX 
(
    function(x) {
        var y = 8;
        console.log(x*4);
    }
)(5);