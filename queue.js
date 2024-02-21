// FIFO(First in first out)

//Array implementation

var q = [];
q.push("first");
q.push("second");
q.push("third");

q.shift() //first
q.shift() //second
q.shift() //third

//can also use unshift() and pop()


//linked list implementation

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    
    dequeue(){
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