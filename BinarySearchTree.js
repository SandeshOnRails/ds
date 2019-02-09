class Node {
       
    constructor(val) {
         this.val = val
         this.right = null
         this.left = null
    }

}

class BinarySearchTree {
      
       constructor() {
             
        this.root = null

       }

       insert(val) {

        let newNode = new Node(val)
             
          if(!this.root){
               
            this.root = newNode
            return this
          }

          else {

            let current = this.root
                
            while(true) {
                   
                 if(current.val < val) {
                       
                    if(current.right === null) {
                          
                        current.right = newNode
                        return this
                    }
                    else {
                         
                        current = current.right
                    }
                 }
                 else  {
                      
                      if(!current.left) {
                            
                        current.left = newNode
                        return this
                      }
                      else {
                           
                        current = current.left
                        
                      }
                       
                 }
            }
          }
       }

       find (val) {
              
               let current = this.root

               if(current.val === val) return true
                
               while(true && current) {
                     
                    if(current.val < val) {
                          
                        if(current.right === null) {

                            return false
                        }

                        else {

                        if(current.right.val === val) {
                              return true
                        }
                        else {

                            current = current.right
                        }
                    }

                    }

                    else if (current.val >= val) {
                          
                        if(current.left === null){

                            return false
                        }

                        else {

                        if(current.left.val === val) {
                               
                            return true
                        }
                        else {
                              
                            current = current.left
                        }
                    }

                    }
               }

               return false
       }

       bfs () {

        let queue = [], visited =[], curr = this.root

          queue.push(curr)

          while(queue.length) {
                
            curr = queue.shift()
            visited.push(curr.val)
            if(curr.right) queue.push(curr.right)
            if(curr.left) queue.push(curr.left)

          }

          return visited
       }

       insert (val) {
             
        let node = new Node(val)

           if(!this.root) {
                 
                 this.root = node
                 return this
           }

           else {
                 
            let current = this.root

            while(true) {
                
                if(current.val > val) {
                      
                    if(!current.left) {

                        current.left = node
                        return this
                    }
                    else {
                         
                        current = current.left
                    }
                }
                else {
                     
                    if(!current.right) {
                          
                        current.right = node
                        return this
                    }

                    else {

                        current = current.right
                    }
                }
            }
                
           }
       }

      find2 (val) {
            
           if(this.root.val === val) return true
           
           let curr = this.root

           while(true && curr) {
                
                if(curr.val < val) {
                     
                    if(!curr.right) {
                          
                         return false
                    }
                    else {

                        if (curr.right.val === val) {
                             
                            return true
                        }
                         
                        curr = curr.right
                    }
                }
                else {
                     
                    if(!curr.left) {
                          
                        return false
                    }
                    else {
                          
                        if(curr.left.val === val) {
                              
                            return true
                        }

                        curr = curr.left
                    }
                }
           }

           return false
      }
            
       

       
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.bfs())
console.log(tree.find2(10))
console.log(tree.find2(6))
console.log(tree.find2(15))
console.log(tree.find2(3))
console.log(tree.find2(8))
console.log(tree.find2(20))
console.log(tree.find2(9))





