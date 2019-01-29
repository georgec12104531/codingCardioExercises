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

  add(val) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(val);
    } else {
      const searchTree = function(node) {
        if (val < node.val) {
          if (node.left === null) {
            node.left = new Node(val)
          }
        }
      }
    }
  }
}
