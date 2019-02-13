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
       // this.head = this.tail
        this.tail = curr
        let next;

        while(curr) {
               
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
            
        }
        this.head = prev
    }

    deleteAllOdd() {
          
        let curr = this.head

        while(curr.val%2 !== 0) {
             curr = curr.next;
            this.head = curr;
        }

        let prev = curr
        curr = curr.next

        while(curr) {
             
            if(curr.val %2 !== 0) {
                  
                prev.next = curr.next
                curr = curr.next
                
            }
            else {
                prev = curr  
                curr = curr.next
            }
        }

    }

    deleteAllDuplicate() {
          
        if(this.head){
        let prev = this.head
        let curr = this.head.next
        while(curr) {

            if(curr.val === prev.val) {
                
                 curr = curr.next
            }
            else {

                prev.next = curr
                prev = curr
                curr = curr.next
            }
        }

        prev.next = null
    }

else {
     return undefined
}
    }

}

let list = new LinkedList()
list.push(3)
list.push(3)
list.insertAt(2,3)
list.push(4)
list.push(5)
list.push(5)
//list.reverse()
//list.deleteAllOdd()
list.deleteAllDuplicate()
list.print()
