class Node {
       
    constructor(val) {
          
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
       
    constructor() {
         
        this.head = null
        this.tail = null
        this.size = 0
    }

    push (val) {

        let newNode = new Node(val)
        
           
        if (!this.head) {
              
            this.head = newNode
            this.tail = newNode
        }

        else {
              
            this.tail.next = newNode
            let previous = this.tail
            this.tail = newNode
            this.tail.prev = previous
        }
    }

    addFront(val) {
         
         let newNode = new Node(val)
         let curr = this.head
         this.head = newNode
         this.head.next = curr
         curr.prev = this.head
    }

    insertAt (val, index) {
          
        let newNode = new Node(val)
        if(index === 0) {
             
        }
    }
    reversePrint () {
          
        let curr = this.tail
        while(curr) {
             console.log(curr.val)
             curr = curr.prev
        }

    }

    print () {

        let curr = this.head
        while(curr) {
            console.log(curr.val)
            curr = curr.next
        }
    }

    pop () {
          
        let toRemove = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        toRemove = null
    }
         

}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.addFront(4)
//list.pop()
//list.print()
list.reversePrint()