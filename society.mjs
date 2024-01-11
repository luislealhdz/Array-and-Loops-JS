const ascendingMode = (nameA, nameB) => nameA.localeCompare(nameB);

export const secretName = (listNames) => {
    listNames.sort(ascendingMode);
    let secretSociety = "";
    listNames.forEach((element) => {
        secretSociety += element.charAt(0);
    });
    return secretSociety;
};
