/**
 * Calculate the sum of all resistors connected in series.
 * @param {number[]} resistorsSerie Resistors serie to sum
 * @returns {string} Sum of all resistors
 */
export const sumResistance = (resistorsSerie) => {
    let ohms = 0;
    resistorsSerie.forEach((resistor) => {
        ohms += Math.abs(resistor);
    });
    return `${ohms} ohms.`;
};
