/**
 * Write a function to determine if an array is positively dominant.
 * @param {number[]} numbers List of numbers.
 * @returns {boolean} isPositiveDominance An array is positively dominant when the majority of its elements are positive.
 */
export const positiveDom = (numbers) => {
    let positiveNumbers = 0;
    let negativeNumbers = 0;

    numbers.forEach((element) => {
        element >= 0 ? positiveNumbers++ : negativeNumbers++;
    });

    const isPositiveDominance = positiveNumbers > negativeNumbers;

    return isPositiveDominance;
};
