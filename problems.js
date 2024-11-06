function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    const brackets = [];
    for (let i = 1; i < arr.length; i += 2) {
        brackets.push(arr[i])
    }
    return brackets
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    const brackets = []

    for (let i = 1; i < arr.length; i += 2) {
        brackets.push(arr[i])
    }
    return brackets.reverse();
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    const brackets = [];
    for (let i = 1; i < arr.length; i *= 2) {
        brackets.push(arr[i]);
    }
    return brackets
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    const brackets = [];
    for (let i = 1; i < arr.length; i *= n ) {
        brackets.push(arr[i])
    }
    return brackets
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    const mid = Math.ceil(arr.length / 2)
    return arr.slice(0, mid)

}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    const start = Math.ceil(arr.length / 2)
    return arr.slice(start)
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
