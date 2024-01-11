/**
 * Display online status for a list of users.
 * @param {string[]} friendsList Friend users list.
 * @returns {string} String with the status of online friends.
 */
export const onlineStatus = (friendsList) => {
    // No friends are online
    if (friendsList.length === 0) {
        return `No one is online`;
    }

    // Only one friend is online
    if (friendsList.length === 1) {
        return `${friendsList[0]} is online`;
    }

    // Only two friends are online
    if (friendsList.length === 2) {
        return `${friendsList[0]} and ${friendsList[1]} are online`;
    }

    // There are more than two friends online
    if (friendsList.length >= 2) {
        const restOfFriends = friendsList.length - 2;
        return `${friendsList[0]} and ${friendsList[1]} and ${restOfFriends} more online`;
    }
};
