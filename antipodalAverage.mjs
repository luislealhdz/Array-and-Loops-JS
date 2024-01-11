// Given an array, return a shorter array following these steps:
// - Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
// - Sum each number of the first part with the inverse numbers of the second part.
// - Divide each number of the resulting array by 2.

// Example:
// - For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.

export const antipodalAverage = (numbers) => {
    // console.log(numbers);
    const half = Math.floor(numbers.length / 2);
    console.log(half);
};
