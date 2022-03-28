var fizz = 0;
var buzz = 0;
var fizzBuzz = 0;
for (var i = 1; i<1000; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i + " fizz buzz");
        fizzBuzz++;
    } else if (i % 3 === 0) {
        console.log(i + " fizz");
        fizz++;
    } else if (i % 5 === 0) {
        console.log(i + " buzz")
        buzz++;
    } else {
        console.log(i);
    }
}
console.log("There were "+fizz+" fizzes, "+buzz+" buzzes, and "+fizzBuzz+" fizz buzzes out of 1000.");