// Tree traversal is searching for a node along the tree.
// Breadth first search(BFS) and Depth first search(DFS) approaches



class Node {
    constructor(val){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null; 
    }
    
    BFS(){
        var data = [];
        var queue =  [];
        var node = this.root;
        queue.push(node);
        while(!queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right)
        }
        traverse(current);
        return data;
    }

    DFSPostOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }

    DFSInOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

// Which is better?

// Both have same time complexity
// Space depends on the tree

// BFS  - Lots of nodes to keep track of (depends on tree as well)
// DFS - Fewer nodes to keep track of
// PreOrder vs PostOrder vs InOrder - Inorder - sort, PreOrder - cloning - depends on situtation which is better. 