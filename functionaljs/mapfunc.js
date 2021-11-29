const map = (arr, func) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const result = func(arr[i]);
        newArray.push(result);
    }

    // equivalent to
    // arr.reduce((acc, x) => [
    //     ...acc,
    //     func(x),
    // ], []);
}


// testing if it works
// should be [2, 4, 6]

console.log(map([1, 2, 3], x => x * 2));
console.log(map([5, 6, 7, 8], x => -x));