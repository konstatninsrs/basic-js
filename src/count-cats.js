module.exports = function countCats(matrix) {

    var catsCount = 0;

    for (var item of matrix) {
        for (var item2 of item) {
            if (item2 === "^^") {
                catsCount++;
            }
        }

    }

    return catsCount;
};
