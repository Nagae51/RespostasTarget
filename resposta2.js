let num = 34;
let fib1 = 0;
let fib2 = 1;

while (fib2 < num) {
    temp = fib1;
    fib1 = fib2;
    fib2 = temp + fib2;
}

num == fib2 ? console.log("Faz Parte") : console.log("Nao faz parte");