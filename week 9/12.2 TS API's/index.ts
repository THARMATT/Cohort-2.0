// interface User{
//     name:string,
//     age:number
// }
// function sumofAge(user1:User,user2:User){
//     console.log(`Sum of Ages ${user1.age}+${user2.age}=`,user1.age+user2.age)
// }
// sumofAge({name:'Nigam',age:55},{name:"sonali",age:22})

type User=Record<string,{name:string,age:number}>
const user:User={id:{name:"nigam",age:22}}