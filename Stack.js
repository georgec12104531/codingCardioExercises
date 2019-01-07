


function Stack () {
  this.count = 0;
  this.storage = {};

  this.push = function(element) {
    this.count++
    this.storage[this.count] = element
  }

  this.pop = function() {
    const lastElement = this.storage[this.count]
    delete this.storage[this.count]
    this.count--
    return lastElement
  }

  this.peek = function() {
    if (this.count === 0) return undefined
    console.log(this.storage[this.count])
  }

  this.size = function() {
    return this.count
  }

  this.show = function() {
    for(let i = 1; i < this.count + 1; i++) {
      console.log(i)
      console.log(this.storage[i])
    }
  }
}


const myStack = new Stack()
myStack.push("hello")
myStack.push("there")
myStack.push("sexy")
myStack.push("boy")
console.log(myStack.show())
