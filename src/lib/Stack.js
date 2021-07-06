class Stack {
    constructor() {
        this.stack = [];
    }

    add(item) {
        this.stack.unshift(item);
    }

    process() {
        return this.stack.shift();
    }

    elements() {
        return this.stack;
    }

    hasElement() {
        return this.stack.length ? true : false;
    }

    size() {
        return this.stack.length;
    }
}

export default Stack;
