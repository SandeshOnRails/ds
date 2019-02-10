class HashTable {
      
    constructor() {
         
        this.keyValueMap = new Array(50)
    }

     hash(key) {
        let total = 0;
        let random = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96
          total = (total * random + value) % this.keyValueMap.length;
        }
        return total;
      }

      set(key, value) {
            
          let index = Number(this.hash(key))

          if(!this.keyValueMap[index]) {
               
             this.keyValueMap[index] = []
          }
          this.keyValueMap[index].push([key, value])
          
      }

      get(key, value) {
            
        let index = this.hash(key)
         
        if(this.keyValueMap[index]) {

        for(let i=0; i < this.keyValueMap[index].length; i++) {
              
            if(this.keyValueMap[index][i][0] === key) {
                  
                return this.keyValueMap[index][i][1]
            }
        }
    }

        return undefined

      }

      keys() {

        let keyStore = []
            
           for(let i =0; i < this.keyValueMap.length; i++) {


            if(this.keyValueMap[i]) {
                 
               for (let j =0; j < this.keyValueMap[i].length; j++) {
                     
                     keyStore.push(this.keyValueMap[i][j][0])
              }
           }

        }
           
        return keyStore
      }

      values () {

        let valueStore = []
            
        for(let i =0; i < this.keyValueMap.length;i++) {


            if(this.keyValueMap[i]){
              
            for(let j =0; j < this.keyValueMap[i].length; j++) {
                  
                     valueStore.push(this.keyValueMap[i][j][1])
            }
        }

    }

    return valueStore
      }
}

let maps = new HashTable()
maps.set("sandesh", 100)
maps.set("john", 200)
maps.set("joanne", 300)
maps.keys().forEach(key=>console.log(maps.get(key)))