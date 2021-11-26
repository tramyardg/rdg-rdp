// Higher-order functions
const divide = (x, y) => x / y;

const secondArgumentIsntZero = func => 
    (...args) => {
        if (args[1] === 0) {
            console.log("Error: dividing by zero");
            return null;
        }
        return func(...args);
    }

// const secondArgumentIsntZero = func => {
//     return (...args) => {
//         if (args[1] === 0) {
//             console.log("Error: dividing by zero");
//             return null;
//         }
//         return func(...args);
//     }
// }
        
const divideSafe = secondArgumentIsntZero(divide);
console.log(divideSafe(7, 0));    