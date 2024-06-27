// enum Direction{
// Up,
// Down,
// LEFT,Right
// }
// function a(keypress:Direction){
//     console.log(Direction.Up);
    
// }

// a(Direction.Right)

// function type(arg:string|number){
//     return arg
// }
// type('one');
// type(1)

// function type(arg:string|number){
//     return arg
// }
// let val=type('one');
// type(1);
// val.toUpperCase()


function type<T>(arg:T){
    return arg
}
let val=type('one');
let n=type<number>(1);
type<boolean>(true);
type<null>(null);

val.toUpperCase()