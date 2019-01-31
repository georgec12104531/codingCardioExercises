//Binary Search Tree

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null
  }

  add(data) {
    const node = this.root;
    //if there is no root node, add new node as the root node
    if (node === null) {
      this.root = new Node(data)
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node (data);
            return;
          } else if(node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null
        }
      }
      return searchTree(node)
    }
  }

  findMin() {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  findMax() {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }

    return node;
  }

  isPresent(data) {
    let node = this.root;
    while (node) {
      if (node.data === data) {
        return true
      }
      if (data < node.data) {
        node = node.left
      } else {
        node = node.right
      }
    }
    return false
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node === null) {
        return null
      }
      if (node.data === data) {
        if (node.left === null) {
          return node.right;
        }
        if (node.right === data) {
          return node.left; 
        }
        if (node.left === null && node.right === null) {
          return null;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data); 
        return node;
      }
    }
    return this.root = removeNode(this.root, data)
  }

}


const newBST = new BST()
// console.log(newBST)
newBST.add(8)
newBST.add(3)
newBST.add(5)
newBST.add(4)
newBST.add(6)
console.log(newBST.isPresent(5))
newBST.remove(5)
console.log(newBST.isPresent(5))



