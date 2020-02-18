module.exports = class DepthCalculator {
    calculateDepth(arr) {
        var depth = 0;

        for (var item of arr) {
            if (item instanceof Array) {
                depth++;
                this.calculateDepth(item);
            }
        }
        if (depth === 0)
            return 1;
        else
            return depth+1;
    }


};