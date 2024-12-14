// 1. Crear la funcion  
function primosMenoresQue(n) { // funcion creada con una variable almacenada -> n
    const primos = []; // array para almacenar los numeros primos

    for (let num = 2; num < n; num++) { //Metodo matematico para hacer el arreglo de numeros primos
        let esPrimo = true; //Variable para verificar si el numero es primo

        for (let i = 2; i <= Math.sqrt(num); i++) { //Metodo matematico para hacer el arreglo de numeros primos
            if (num % i === 0) { // Metodo matematico para verificar si es primo
                esPrimo = false; //Variable para decir que es falso el numero es primo
                break;
            }
        }

        if (esPrimo) { // Afirmacion que es primo
            primos.push(num); // Enviar al array del resultado de los numeros primos
        }
    }

    return primos; // Metodo para devolver el array con los numeros primos
}

// 2. Uso:
let numero = parseInt(prompt('Ingrese un número entero:')); // Solictar un numero al usuario

let primosMenores = primosMenoresQue(numero); //Variable que contiene la funcion

resultado.textContent = (`Números primos menores que ${numero}:`); // Dar el texto con el numero ingresado en el prompt

numero1.textContent = (`${primosMenores.join(', ')}`); // Dar el resultado de los numeros primos


