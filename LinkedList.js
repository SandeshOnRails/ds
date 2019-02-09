class Node {
       
    constructor(val) {
          
        this.val = val
        this.next = null
    }
}


class LinkedList {
       
    constructor() {
         
        this.head = null
        this.tail = null
        this.length = 0
    }


    push(val) {

        let node = new Node(val)
          
        if (this.head === null) {
             
            this.head = node
            this.tail = node
            this.length++

        }

        else {
              
            let curr = this.head

            while (curr.next !== null) {
                  
                curr = curr.next
            }

            curr.next = node
            this.tail = node
            this.length++
        }
    }


    pushFront(val) {
          
        let curr = this.head
        let newHead = new Node(val)
        this.head = newHead
        this.head.next = curr
        this.length++

    }

    pop() {
         
        let curr = this.head
        let prev = null

        while (curr.next !== null) {
             
             prev = curr
             curr = curr.next   
        }

         this.tail = prev
         this.tail.next = null
         prev = null
         curr = null
         this.length--    

    }

    popFirst() {
          
        let curr = this.head
        this.head = curr.next
        curr = null
        this.length--
    }

    insertAt(index, val) {
          
        if (!this.head) return undefined

        if(index === 0) {
             this.pushFront(val)
        }

        else if (index === this.length) {
              
            this.push(val)
        }

        else {
             
            if( (index+1) > this.length) {
                  
                return undefined
            }

            else {
                let newNode = new Node(val)  
                let prev = this.head
                let curr = prev.next
                let currInd = 1
                while(currInd !== index) {
                     
                    prev = prev.next
                    curr = curr.next
                    currInd++
                }

                prev.next = newNode
                newNode.next = curr
                this.length++
            }
        }
    }

    removeAt(index) {
          
        if(!this.head) return undefined

        if (index === 0) {
              
            this.popFirst()
        }

        else if (index === this.length) {
              
            this.pop()
        }

        else {
              
            if( (index + 1) > this.length) {
                  
                return undefined
            }

            else {
                  
                let prev = this.head
                let curr = prev.next
                let currInd = 1
                while(currInd !== index) {
                      
                    prev = prev.next
                    curr = curr.next
                    currInd++
                }

                prev.next = curr.next
                curr = null
            }
        }
    }

    print() {
         
        let curr = this.head
        while(curr !== null) {
             console.log(curr.val)
             curr = curr.next
        }
    }

    reverse() {
          
        let prev = null
        let curr = this.head
        this.head = this.tail
        this.tail = curr
        let next;

        while(curr) {
               
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
            
        }
    }



}

let list = new LinkedList()
list.push(1)
list.push(2)
list.insertAt(2,3)
list.reverse()
list.print()