Array.prototype.selectionSort = function () {
    for (var i = 0; i < this.length-1; i++) {
        for (var j = i+1; j < this.length; j++) {
            if (this[j] < this[i]) {
                var temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
}