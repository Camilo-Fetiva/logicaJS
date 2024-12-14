// 1.Solicitar el numero
let numero = parseInt(prompt('Ingresa un numero: '))

// 2. Almacenar los datos solicitados
let fibonacci = operacionFibonacci(numero);

// 3. Crear la funcion
function operacionFibonacci(n){

    const secuencia = []; //Array que guarda los numeros de la secuencia

    // 3.1 El numero recibido es menor o igual 0
    if (n <= 0){
        alert('Numero invalido')
        location.reload();
    }
    
    // 3.2 Asignar los valores iniciales de la secuencia
    let a = 0;
    let b = 1;

    // 3.3 Operacion de la secuencia
    while(a <= n){
        secuencia.push(a); //Agregar el numero actual a la secuencia
        let siguiente = a + b; // La variable toma el valor de a+b
        a = b; //Actualizar el valor del primer numero al siguiente
        b = siguiente; //Actualizar el 2do valor con la operacion de la variable
    }
    return secuencia;
}

resultado.textContent = (`Números de la secuencia de Fibonacci hasta el número ${numero}:`); // Dar el texto con el numero ingresado en el prompt

numero1.textContent = (`${fibonacci.join(', ')}`); // Dar el resultado de la secuencia