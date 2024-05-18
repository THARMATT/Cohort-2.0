let a
console.log("hello")
setTimeout(() => {
    console.log("first settimeout")
}, 5000);
setTimeout(() => {
    console.log("2nd settimeout")
}, 3000);


for(let i=0;i<10000000000;i++){
    
    a=a+i
}
console.log("exist")