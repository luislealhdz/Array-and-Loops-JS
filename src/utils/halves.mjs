/**
 * Given a number, return the number divided into its halves in an array.
 * @param {number} number Number to divide.
 * @returns {number[]} Array of two items with half the given number.
 */
export const dividedIntoHalves = (number) => {
    const half = number / 2;
    return [half, half];
};
