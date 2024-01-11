import { sumResistance } from "./resistors.mjs";
import { dividedIntoHalves } from "./halves.mjs";
import { secretName } from "./society.mjs";
import { onlineStatus } from "./status.mjs";
import { arrayOfMultiples } from "./multiples.mjs";
import { positiveDom } from "./positiveDominance.mjs";
import { antipodalAverage } from "./antipodalAverage.mjs";

// 1. Sum of Resistors in Series

// `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
console.log(sumResistance([-1, 5, 6, 3]));

// `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
console.log(sumResistance([14, 3.5, 6]));

// `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
console.log(sumResistance([8, 15, 100]));

// 2. Number divided into halves

// - `numDiv(4)` should return `[2, 2]`.
console.log(dividedIntoHalves(4));

// - `numDiv(10)` should return `[5, 5]`.
console.log(dividedIntoHalves(10));

// 3. Secret Society

// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
console.log(secretName(["Esperanza", "Franco", "Nia"]));

// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
console.log(
    secretName(["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"])
);

// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
console.log(secretName(["Harry", "Ron", "Hermione"]));

// 4. Online status
console.log(onlineStatus([]));
console.log(onlineStatus(["mockIng99"]));
console.log(onlineStatus(["mockIng99", "J0eyPunch"]));
console.log(onlineStatus(["mockIng99", "J0eyPunch", "glassedFer"]));
console.log(onlineStatus(["mockIng99", "J0eyPunch", "glassedFer", "luigi"]));

// 5. Array of Multiples

// - `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
console.log(arrayOfMultiples(2, 10));

// - `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
console.log(arrayOfMultiples(17, 6));

// 6. Positive dominance in Array

// - `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
console.log(positiveDom([-1, -3, -5, 4, 6767]));

// 7. Antipodal Average
console.log(antipodalAverage([1, 2, 3, 5, 22, 6]));
console.log(antipodalAverage([1, 2, 3, 5, 22, 6, 5]));
