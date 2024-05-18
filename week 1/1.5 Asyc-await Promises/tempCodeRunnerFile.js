console.log("hello")
setTimeout(() => {
    console.log("first settimeout")
}, 5000);
setTimeout(() => {
    console.log("2nd settimeout")
}, 10000);
for(let i=0;i<100000;i++){
    let a=a+i
}
console.log("exist")