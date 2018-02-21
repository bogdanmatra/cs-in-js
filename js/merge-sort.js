var mergeSort = (function () {
    function mergeSort(array) {
        if (array.length < 2) return array;
        var middle = Math.floor(array.length / 2);
        var leftArray = array.slice(0, middle);
        var rightArray = array.slice(middle);
        return merge(mergeSort(leftArray), mergeSort(rightArray));
    }

    function merge(left, right) {
        var result = [],
            indexLeft = 0,
            indexRight = 0;
        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft++]);
            } else {
                result.push(right[indexRight++]);
            }
        }
        return result
            .concat(left.slice(indexLeft))
            .concat(right.slice(indexRight));
    }

    return mergeSort;
})();
