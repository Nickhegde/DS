// LIFO(last in first out) data structure
// undo/redo functionality
// routing

// Array Implementation
var stack = [];
stack.push("google");
stack.push("meta");
stack.push("youtube");

stack.pop()  //youtube 
stack.pop()  //meta
stack. pop() //google


// can also use array.unshift() - adding to the begining and array.shift() - removing from begining - follows LIFO

// Linked list Implementation

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

// Big O 
// insertion - O(1)
// removal - O(1)
// searching - O(N)
// access - O(N)