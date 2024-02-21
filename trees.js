// root is top node of tree
// child is a node directly connected to another node when moving away from root
// siblings are group of nodes with same parent
// leaf is a node with no children
// edge is the connection between one node and another

// Binary tree - each node can have at max 2 children
// Binary search tree - binary tree which are sorted in way such that all the nodes to the left is less than the parent,
// and the ones on the right are greater than the parent.

class Node {
    constructor(val){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null; 
    }
}

var tree = new BinarySearchTree()
tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.right = new Node (15);

// insert 

class BinarySearchTree {
    constructor(){
        this.root = null; 
    }
    insert(value){
        var newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        } else {
            current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                       current = current.left; 
                    }
                } else if(value > current.value) {
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                       current = current.right; 
                    }
                }
            }
        }
    }
    
    find(value){
        if(!this.root) return false;
        var current = this.root, found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if (value > current.right){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return false;
        return current;
    }
}

// Big O 
// insertion - O(logn)
// searching - O(logn)