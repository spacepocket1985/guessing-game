class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.left = min;
        this.right = max;

    }

    guess() {
        this.mid = Math.round((this.right - this.left) / 2) + this.left
        console.log(this.mid)
        return this.mid
    }

    lower() {
        console.log('lover')
        return this.right = this.mid
    }

    greater() {
        console.log('greater')
        return this.left = this.mid
    }
}

module.exports = GuessingGame;
