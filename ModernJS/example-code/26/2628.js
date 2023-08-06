class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        const that = this;
        return arr.map(function (item) {
            // return this.prefix + item; // Error
            return that.prefix + item;
        });
    }

    add1(arr) {
        return arr.map(function (item) {
            return this.prefix + item;
        }, this);
    }

    add2(arr) {
        return arr.map(function (item) {
            return this.prefix + item;
        }.bind(this));
    }

    add3(arr) {
        return arr.map(item => this.prefix + item);
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));
console.log(prefixer.add1(['transition1', 'user-select1']));
console.log(prefixer.add2(['transition2', 'user-select2']));
console.log(prefixer.add3(['transition3', 'user-select3']));