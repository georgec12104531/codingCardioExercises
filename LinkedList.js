function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  let length = 0;
  let head = null;


  this.add = function(element) {
    const newNode = new Node(element)
    if(head === null) {
      head = newNode
    } else {
      let currentNode = head
      while(currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
    
    length++;
  }

  this.length = function() {
    return length
  }

  this.show = function() {
    let currentNode = head;
    let i = 1;
    while(currentNode) {
      console.log(`Current Node Number ${i}`, currentNode.element);
      currentNode = currentNode.next;
      i++
    }
  }
  //remove
  
}


const list = new LinkedList()
list.add("abc")
list.add("asdfasdf")
list.add("asdfasdfasdf")


console.log(list.length())
list.show();
