// [1,2,3,4,5,6]=>[2,4,6,8,10,12]
let arr=[1,2,3,4,5,6];
let map=arr.map(function(num){
   return num*2
})
console.log(map)


// [1,2,3,4,5,6]=>[2,4,6]
let arr1=[1,2,3,4,5,6];
let filter=arr.filter(function(num){
   return num%2==0
})
console.log(filter)

//callback functions
function abc(cb){
    cb("hello")
    }
     function def(){
    abc(function(value){
    console.log(value)
    })
}
    def()
    
