function CircularQueue(maxLength) {
  this.maxLength = maxLength;
  this.queue = [];
  this.head = 0;
  this.tail = 0;

  this.front = () => {
    const frontItem = this.queue[this.head];
    return frontItem;
  }

  this.rear = () => {
    const rearItem = this.queue[this.tail];
    return rearItem;
  }

  this.enQueue = (val) => {
    // if (this.queue.length <= this.maxLength) {}
    if (this.queue[this.write === null]) {
      this.queue[this.tail] = val;
      this.tail = this.tail === this.maxLength - 1 ? 0 : (this.tail + 1) % this.maxLength;
    }
  }

  this.deQueue = () => {
    if (this.head === this.tail) return null;
    this.queue[this.head] = null;
    this.head = this.head === this.maxLength - 1 ? 0 : this.head + 1 % this.maxLength;
  }

  this.show = () => {
    return this;
  }

}

const newPQ = new CircularQueue(5);

console.log(newCQ);
newCQ.enQueue(1);
newCQ.enQueue(2);
newCQ.enQueue(3);
newCQ.enQueue(4);
newCQ.enQueue(5);
newCQ.show();
newCQ.deQueue();
newCQ.show();
newCQ.enQueue(1);
newCQ.show();
newCQ.enQueue(7);
newCQ.show();
// newCQ.enQueue(8);
// newCQ.enQueue(9);
// newCQ.show();
