function a() {
    console.log('hello');
}
function sum(fn) {
    setInterval(fn, 1000);
}
var value = sum(a);
console.log(value);
