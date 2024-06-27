// function a(){
//   console.log('hello');
function islegal(user) {
    if (user.age > 18) {
        console.log("".concat(user.firstname, " can drive a car"));
    }
    else {
        console.log('he is not allowed to drive a car');
    }
}
var username = {
    firstname: "nigam",
    age: 19
};
islegal(username);
