class Queue {
    constructor() {
        this.queue = [];
    }

    add(item) {
        this.queue.unshift(item);
    }

    process() {
        return this.queue.pop();
    }

    tasks() {
        return this.queue;
    }

    hasTask() {
        return this.queue.length ? true : false;
    }

    size() {
        return this.queue.length;
    }
}

export default Queue;
