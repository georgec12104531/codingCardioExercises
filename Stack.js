function Stack() {
  this.collection = [];
  this.print = function() {
    console.log(collection);
  };

  this.push = (val) => {
    this.collection.push(val)
  }

  this.pop = () => {
    return this.collection.pop();
  }

  this.peek = () => {
    return this.collection[this.collection.length - 1];
  }

  this.isEmpty = () => {
    return this.collection.length === 0;
  }

  this.clear = () => {
    this.collection = [];
  }
}

const stack = new Stack();

stack.pop();
