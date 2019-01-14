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

function PriorityQueue() {
  this.collection = []

  this.enqueue = function(element) {
    if (this.isEmpty()) {
      this.collection.push(element)
    } else {
      let added = false
      for(let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element)
          console.log("we in here")
          added = true
          break;
        } 
      }

      if (!added) {
        return this.collection.push(element)
      }
    }
  }

  this.dequeue = function() {
    const last = this.collection.shift()
    return last
  }

  this.isEmpty = function() {
    return this.size() === 0
  }

  this.size = function() {
    return this.collection.length
  }

  this.show = function() {
    return this.collection
  }
}

const newQueue = new PriorityQueue()
newQueue.enqueue(["a", 3])
newQueue.enqueue(["c", 5])
newQueue.enqueue(["b", 1])
newQueue.enqueue(["f", 9])
console.log(newQueue.show())
newQueue.dequeue()
console.log(newQueue.show())


