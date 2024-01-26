document.write(factorial(prompt("Escribe un número")))

function factorial(número) {
    if (número == 0) {
        return 1;
    } else { 
        return número * factorial(número - 1);
    }
}



