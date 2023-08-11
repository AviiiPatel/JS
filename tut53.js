console.log("hollla this is lio messi");

function greet(name, greetText = "Greeting from javascript") {
    console.log(greetText + " " + name)
    console.log(name + " is a good boy")
}

function sum(a, b, c) {
    d = a + b + c;
    return d;

    //   this line will never executed (unreachable code)
    // console.log("function is returned")

}

let name = "Aviii";
let name1 = "Messi";
let name2 = "Anish";
let name3 = "Ayaan";
let name4 = "Dishu";

let greetText = "Good Morning";

greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);
greet(name4);

// let x=greet(name3)
// {
//     console.log(x);
// }

let y = sum(1, 2, 3)
console.log(y);

// sum(10, 6, 25);


// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good boy"); 
