Array.prototype.bubbleSort = function () {
    for (var i = this.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if (this[j] > this[i]) {
                var temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
}