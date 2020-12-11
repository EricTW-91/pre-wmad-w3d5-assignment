
// write a function that takes every item in the array, and adds the word 'HOORAY' to the end of it
// and console.log it

let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

const addHooray = function (arr) {

    let result = [];

    for (i = 0; i < arr.length; i++) {
        
        let combineWords = arr[i] + "Horray";

        result.push(combineWords);
    }
    console.log(result);
};

addHooray(food);