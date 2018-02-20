Array.prototype.insertionSort = function () {
    for (var i = 1; i < this.length; i++) {
        var current = this[i];
        for (var j = i - 1; j >= 0 && this[j] > current; j--) {
            this[j + 1] = this[j];
        }
        this[j + 1] = current;
    }
}