class Node {
      
    constructor(val) {
          this.val = val
          this.next = null
    }
}


class Stack {
      
    constructor() {
          
        this.head = null
        this.tail= null
        this.size = 0
    }

    push (val) {
          
        let newNode = new Node(val)
        if(this.head === null) {
              
            this.head = newNode
            this.tail = newNode
            this.size++
        }

        else {
              
            this.tail.next = newNode
            this.tail = newNode
            this.size++
        }
    }


    pop () {
          
        let curr = this.head
        let prev = null
        
        while(curr) {
             
            if(curr === this.tail) {

                curr = null
            }

            else {

                prev = curr
                curr = curr.next
            }
        }

        this.tail = prev
        prev = null

    }

    print() {
          
        let curr = this.head
        while(curr) {
              
            console.log(curr.val)
            curr = curr.next
        }
    }

}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()