function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;


  this.add = function(element) {
    const newNode = new Node(element)
    if(this.head === null) {
      this.head = newNode
    } else {
      let currentNode = this.head
      while(currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
    
    this.length++;
  }

  this.showLength = function() {
    return this.length
  }

  this.show = function() {
    let currentNode = this.head;
    let i = 1;
    while(currentNode) {
      console.log(`Current Node Number ${i}`, currentNode.element);
      currentNode = currentNode.next;
      i++
    }
  }

  this.removeHead = function() {
    if (this.length === 0) return undefined
    const previousHeadValue = this.head.element
    this.head = this.head.next
    this.length--

    return previousHeadValue
  }

  this.remove = function(element) {
    if (this.length === 0) return undefined 
    if (this.head.element === element) this.removeHead()

    let previousNode = this.head
    let currentNode = previousNode.next
    
    while (currentNode) {
      if (currentNode.element === element) break;

      previousNode = currentNode 
      currentNode = currentNode.next
    }

    if (currentNode === null) return undefined

    previousNode.next = currentNode.next
    this.length--
    return this
  }
  
}


const list = new LinkedList()

list.add("a")
list.add("ab")
list.add("abc")
list.add("abcd")
list.show()
list.remove("ab")
list.show()
