/**
 * Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 * @param {number} number Base number
 * @param {number} length Length containing multiples of the number.
 * @returns {number[]} mulitples List of multiples of the number.
 */
export const arrayOfMultiples = (number, length) => {
    const multiples = [];

    for (let i = 1; i <= length; i++) {
        multiples.push(number * i);
    }

    return multiples;
};
