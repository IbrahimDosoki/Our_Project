let nums = [10, 20, 30, 40, 50];

let add = nums.reduce(function (acc, current, index, arr) {
    console.log(acc);
    console.log(current);
    console.log(index);
    console.log(arr);

    // return acc + current;