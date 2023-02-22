function tribonacci(signature,n){
    var newItem = 0
    
    
    if (n > 1) {
      for (var i = 0; i < n-3; i++) {
      
        newItem += signature[signature.length - 1]
        newItem += signature[signature.length - 2]
        newItem += signature[signature.length - 3]
        signature.push(newItem)
        newItem = 0
      }
      return(signature)
    } 
    else if (n == 1) {
      if (signature[0] == signature[1] == signature[2]) {
        return([signature[0]])
      }
      else {
       return(signature.slice(0, 2)) 
      }
    } 
    else if (n == 0) {
      return([])
    }
    
  }

console.log(tribonacci([1, 2, 3], 1))
console.log(tribonacci([2, 4, 6], 10))
console.log(tribonacci([4, 8, 12], 20))