export const arrayOfMultiples = (number, length) => {
    const multiples = [];

    for (let i = 1; i <= length; i++) {
        multiples.push(number * i);
    }

    return multiples;
};
