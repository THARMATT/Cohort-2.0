function greet(name) {
    console.log(`Hello ${name}`)
}
greet("Nigam")

function greetbygender(gender, name) {
    if (gender === "male") {
        console.log(`Heloo Mr. ${name}`)
    }
    else {
        console.log(`Heloo Miss. ${name}`)
    }
}
greetbygender("female", "Parul")

function print1toN(N) {
    for (let i = 1; i <= N; i++) {
        console.log(i)
    }

}
print1toN(100)

function printevenNos(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i])
        }
    }


}
printevenNos([1, 2, 3, 4, 5, 6, 7, 8, 88])

function printLargest(arr) {
    let maxno = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > maxno) {
            maxno = arr[i]

        }
       
    
        }
        console.log("Largest no is:",maxno)
    
}
printLargest([2,3,4,5,6,7,,7,77,8,8])

function sum(a,b){
    return console.log("Sum is:" , a+b)
}
sum(1,2)


let sum1=0;
for(let i=0;i<10000000000;i++){
    sum1=sum1+i
}
console.log(sum1)