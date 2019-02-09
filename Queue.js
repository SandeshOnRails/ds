class Node {
      
    constructor(val) {
          
        this.val = val
        this.next = null
    }
}

class Queue {
      
    constructor() {
          
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
          
        let newNode = new Node(val)
        
        if(!this.first) {
              
            this.first = newNode
            this.last = newNode
            this.size++
        }

        else {
              
            this.last.next = newNode
            this.last = newNode
            this.size++
        }
    }

    pop() {
          
        let curr = this.first
        this.first = this.first.next
        curr = null
        this.size--
        
    }

    print() {
         
        let curr = this.first
        while(curr) {
              
            console.log(curr.val)
            curr = curr.next

        }
    }
     
}

let queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.print()
queue.pop()
queue.print()
