
const vals = [1, 5, 10, 25, 50, 100];
const coinArray = [
    {denom: 5, count: 3},
    {denom: 10, count: 3},
    {denom: 25, count: 4},
    {denom: 50, count: 2}
];
const coinArray2 = [
    {denom: 25, count: 3},
    {denom: 5, count: 5},
    {denom: 50, count: 2},
    {denom: 100, count: 4},
    {denom: 10, count: 5}
];

// Returns true if coin value is 1, 5, 10, 25, 50, or 100
function validDenomination(coin) {
    console.log(vals.indexOf(coin) !== -1); 
}

validDenomination(5);


// Returns the value of a single coin object from the obj function parameter
function valueFromCoinObject(obj) {
    let coin = {denom: obj.denom, count: obj.count}
    const {denom = 0, count = 0} = coin;
    return coin.denom * coin.count;
}

console.log(valueFromCoinObject({denom:5, count:5}));
console.log(valueFromCoinObject({denom:25, count:5}));

console.log(valueFromCoinObject(coinArray[0]));

//Iterates through an array of coin objects and returns the final value of all coins
function valueFromArray(arr) {
    let emptyArr = [];
    for (let i = 0; i < arr.length; i++) {
        let coinValues = valueFromCoinObject(arr[i], arr[i]);
        emptyArr.push(coinValues);
    }
    return (emptyArr.reduce((a, b) => a + b));
}

console.log(valueFromArray(coinArray));
console.log(valueFromArray(coinArray2));


//Returns the value of all coin objects with the coinage array parameter
function coinCount(coinage) {
    return valueFromArray(coinage)
}

console.log(coinCount([{denom: 5, count: 3}, {denom: 5, count: 4}]));

module.exports = {
    coinCount
}