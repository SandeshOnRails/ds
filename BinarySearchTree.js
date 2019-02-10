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

       dfsPreOrder() {
             
        let visited = []

        function traverse(node) {
              
              visited.push(node.val)
              if(node.left) traverse(node.left)
              if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return visited

       }

       dfsPostOrder () {
             
          let visited = []

          function traverse (node) {
                
             if(node.left) traverse(node.left)
             if(node.right) traverse(node.right)
             visited.push(node.val)
          }

          traverse(this.root)
          return visited
       }

       dfsInOrder () {
            
            let visited = []

            function traverse (node) {
                  
                if(node.left) traverse(node.left)
                visited.push(node.val)
                if(node.right) traverse(node.right)
            }
            traverse(this.root)
            return visited
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
console.log(tree.dfsPreOrder())
console.log(tree.dfsPostOrder())




