//Write a program that prints the integers from 1 to 100 (inclusive).
//But:
//for multiples of three, print Fizz instead of the number;
//for multiples of five, print Buzz instead of the number;
//for multiples of both three and five, print FizzBuzz instead of the number.

let lista = Array.from({ length: 100 }, (v, i) => i + 1);

for (let index = 0; index < lista.length; index++) {
    const elemento = lista[index];
    if (elemento % 3 === 0 && elemento % 5 === 0) {
        console.log("fizzbuzz")
    } else if (elemento % 3 === 0) {
        console.log("fizz")
    } else if (elemento % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(elemento)
    }
}