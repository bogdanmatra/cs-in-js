Array.prototype.selectionSort = function () {
    for (var i = 0; i < this.length - 1; i++) {
        var minIndex = null;
        for (var j = i + 1; j < this.length; j++) {
            if (this[j] < this[i]) {
                minIndex = j;
            }
        }
        if (minIndex) {
            var temp = this[i];
            this[i] = this[minIndex];
            this[minIndex] = temp;
        }
    }
}