function Queue() {
  this.collection = []

  this.show = function() {
    return this.collection
  }

  this.enqueue = function(el) {
    this.collection.push(el)
  }

  this.dequeue = function(el) {
    const last = this.collection.shift()
    return last
  }

  this.size = function() {
    return this.collection.length
  }

  this.front = function() {
    return this.collection[0]
  }

  this.isEmpty = function() {
    return this.collection.length === 0
  }
}


const qOne = new Queue()


console.log(qOne.isEmpty())
qOne.enqueue("a")
qOne.enqueue("b")
qOne.enqueue("c")
qOne.enqueue("d")
console.log(qOne.show())
console.log(qOne.dequeue())
console.log(qOne.show())
console.log(qOne.size())
console.log(qOne.front())

function PriorityQueue () {
    let collection = [];
    this.printCollection = function() {
      console.log(collection);
    };
    // Only change code below this line

    this.enqueue = (valArr) => {
      collection.unshift(valArr);

      for(let i = 0; i < collection.length - 1; i++) {
        current = collection[i];
        next = collection[i + 1];

        if (current[1] < next[1]) {
          console.log('hi');
          [collection[i], collection[i + 1]] = [collection[i + 1], collection[i]];
        }
      }
    }

    this.size = () => {
      return collection.length;
    }

    this.isEmpty = () => {
      return collection.length === 0;
    }

    this.dequeue = () => {
      const item = collection.pop();
      return item[0];
    }
}

// [['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
const newPQ = new PriorityQueue();
newPQ.isEmpty();
newPQ.size();

newPQ.enqueue(['rabbit', 2]);
newPQ.enqueue(['dog', 2]);
newPQ.enqueue(['kitten', 2]);
newPQ.enqueue(['human', 1]);
newPQ.enqueue(['george', 4]);
newPQ.enqueue(['george', 3]);
newPQ.dequeue();


