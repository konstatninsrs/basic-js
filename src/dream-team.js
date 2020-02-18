module.exports = function createDreamTeam(members) {

    var coolSecretName = "";

    if (members instanceof Array) {
        for (var name of members) {
            if (typeof name === "string") {
                coolSecretName += name.trim()[0];
            }
        }
    } else
        return false;
    coolSecretName = coolSecretName.toLocaleUpperCase().split('').sort().join('').trim();

    return coolSecretName;
};