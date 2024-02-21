// They are used to store key-value pairs. The keys are not ordered.They are fast.Js has Objects and Maps. Dictionaries in python. 
// These are built in hash tables.

functon hash(key, arrayLen){
    let total = 0;
    for(let char of key){
        // map "a" to 1, "b" to 2, "c" to 3..etc
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total;
}

class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i=0; i< Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total;
    }

    set(key,value){
       let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }
    
    get(key){
        let index = this._hash(key);
         if(this.keyMap[index]){
            for(let i=0;i<this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                }
            }
         }
        return undefined;
    }

    values(){
        let valuesArr = [];
        for(let i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0;j<this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1]))
                    valuesArr.push(this.keyMap[i][j][1]);
                }
            }
        }

        return valuesArr;
    }

    keys(){
         let keysArr = [];
        for(let i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0;j<this.keyMap[i].length; j++) {
                    if(!keysArr.includes(this.keyMap[i][j][0]))
                    keysArr.push(this.keyMap[i][j][0]);
                }
            }
        }

        return keysArr;
    }
}

let ht = new HashTable();
ht.set("hello world", "goodbye!!")

// Big O of hash tables
// Insert O(1)
// Deletion O(1)
// Access O(1)