const ascendingMode = (nameA, nameB) => nameA.localeCompare(nameB);

/**
 * Find the name of a secret society based on the first letter of each member's name.
 * @param {string[]} listNames List of names.
 * @returns {string} secretSociety Name of a secret society.
 */
export const secretName = (listNames) => {
    listNames.sort(ascendingMode);
    let secretSociety = "";
    listNames.forEach((element) => {
        secretSociety += element.charAt(0);
    });
    return secretSociety;
};
