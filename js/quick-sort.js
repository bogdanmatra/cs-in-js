(function () {
    Array.prototype.quickSort = function quickSort(left, right) {
        var newIndex;
        if (this.length > 1) {

            left = !left ? 0 : left;
            right = !right ? this.length - 1 : right;

            newIndex = partition(this, left, right);

            if (left < newIndex - 1) {
                quickSort(this, left, newIndex - 1);
            }
            if (newIndex < right) {
                quickSort(this, newIndex, right);
            }
        }
        return this;
    }

    function partition(array, leftIndex, rightIndex) {
        var pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
        while (leftIndex <= rightIndex) {
            while (array[leftIndex] < pivot) {
                leftIndex++;
            }
            while (array[rightIndex] > pivot) {
                rightIndex--;
            }
            if (leftIndex <= rightIndex) {
                swap(array, leftIndex, rightIndex);
                leftIndex++;
                rightIndex--;
            }
        }
        return leftIndex;
    }

    function swap(items, firstIndex, secondIndex) {
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }
})();