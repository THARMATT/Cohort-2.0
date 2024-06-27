
function a(){
  console.log('hello');
    
}
function sum(fn:()=>void){
  setInterval(fn,1000)
   
}
const value=sum(a);
console.log(value);
interface User{
firstname:string,
age:number
}
function islegal(user:User){
  if(user.age>18){
    console.log(`${user.firstname} can drive a car`);
    
  }
  else{
    console.log('he is not allowed to drive a car');
    
  }
}
const username={
  firstname:"nigam",
  age:19
}
islegal(username)