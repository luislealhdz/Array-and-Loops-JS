/**
 * Given an array, return a shorter array.
 * @param {number[]} numbers List of numbers.
 * @returns {number[]} antipodalAverageList.
 */
export const antipodalAverage = (numbers) => {
    // - Split the array into two equal parts*.
    const halfOfTheList = numbers.length / 2;

    const firstHalfOfTheList = numbers.slice(0, halfOfTheList);

    // If unequal, remove the middle element to obtain two equal arrays.
    const secondHalfOfTheList =
        halfOfTheList % 1 !== 0
            ? numbers.slice(halfOfTheList + 1)
            : numbers.slice(halfOfTheList);

    // - Sum each number of the first part with the inverse numbers of the second part.
    const inverseNumbersSecondHalf = secondHalfOfTheList.reverse();

    const summedArrays = [];
    for (let i = 0; i < Math.floor(halfOfTheList); i++) {
        const result = firstHalfOfTheList[i] + inverseNumbersSecondHalf[i];
        summedArrays.push(result);
    }

    // - Divide each number of the resulting array by 2.
    const antipodalAverageList = summedArrays.map((number) => {
        return number / 2;
    });

    return antipodalAverageList;
};
