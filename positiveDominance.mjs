export const positiveDom = (numbers) => {
    let positiveNumbers = 0;
    let negativeNumbers = 0;

    numbers.forEach((element) => {
        element >= 0 ? positiveNumbers++ : negativeNumbers++;
    });

    const isPositiveDominance = positiveNumbers > negativeNumbers;

    return isPositiveDominance;
};
