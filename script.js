
           let nombre="María", edad =28, esEstudiante = true;
            console.log("Nombre: ", nombre, "Edad: ", edad, "Es estudiante: ", esEstudiante);
            nombre = "Carlos ", edad = 40, esEstudiante = false;
            console.log(" cambios posteriores");
            console.log("Nombre: ", nombre, "Edad: ", edad, "Es estudiante: ", esEstudiante);
            console.log("-----------------------------------------")
            console.log("Parte 2: Operaciones Matemáticas y Comparación");
            let a = 10, b=5;
            suma = a + b;
            resta = a - b;
            multiplicacion = a * b;
            division = a / b;
            console.log("suma: ", suma, "resta", resta, "multiplicación ",multiplicacion ,"División ",division);
            console.log("Compara los valores de `a` y `b` utilizando los operadores `==`, `!=`, `>`, `<`, `>=`");
            console.log("a == b", a==b, "a !=b", a!=b, "a > b " ,a > b, "a < b ", a < b , "a >= b ", a >= b, "a <= b ", a <= b);
            console.log("\n-----------------------------------------")

            console.log(" Parte 3: Uso de Operadores Lógicos y Concatenación de Strings ");
            let esMayorDeEdad = true, tieneLicencia = false;
            console.log("esMayorDeEdad: ", esMayorDeEdad , "tieneLicencia: ", tieneLicencia);
            console.log("Operador lógico &&: ", esMayorDeEdad &&  tieneLicencia, "operador logico ||: ", esMayorDeEdad ||tieneLicencia);
        

            console.log("parte 4: algoritmo de bananas ");
            console.log("Una fábrica de bananas produce bananas de 10 gramos, se desperdicia el 10 % de azucar,"+
                    "Cúantas bananas sacan de 5 kilos de azucar?");
            let pesoBanana = 20;
            let cantAzucar = 5000;
            let porcentajeAzucarUtilizada = cantAzucar * 10 / 100; // sacamos 10 % azucar desperdiciado.
            let azucarUtilizada = cantAzucar - porcentajeAzucarUtilizada; // definimos cuanta zucar tenemos en realidad.
            let cantBanana = azucarUtilizada / pesoBanana; // calculamos cuantas bananas podemos hacer.
            console.log("Cantidad de bananas que se pueden hacer con 5 kilos de azucar: ", cantBanana);


        //laboratorio 1 ingreso de datos por formulario
       
    document.getElementById("formulario_lab1_ejer1").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página


    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const esEstudiante = document.getElementById("esEstudiante").value;
    // Mostrar los datos en consola
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("esEstudiante:", esEstudiante);

    // Mostrar en pantalla
    const resultado = document.getElementById("resultado_lab1_ejer1");
    resultado.innerHTML = `
      <p><strong>Datos ingresados:</strong></p>
      <p>Nombre: ${nombre}</p>
      <p>Edad: ${edad}</p>
      <p>es estudiante ?: ${esEstudiante}</p>
    `;
  });  

//laboratorio 2 condicionales ejer 1:    
    document.getElementById("formulario_lab2_ejer1").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página
    const calificacion = parseFloat(document.getElementById("calificacion").value);
    let mensaje= "";
        if(calificacion >=90){
            mensaje ="aprobado con honores";
        }
        else if (calificacion >=70){
            mensaje ="aprobado";    
        } else{
            mensaje= "reprobado";   
        }
     // Mostrar en pantalla
    const resultado = document.getElementById("resultado_lab2_ejer1");
    resultado.innerHTML = `<p><strong>Calificación ingresada:</strong> ${calificacion}</p>
                           <p><strong>La decisión es:</strong> ${mensaje}</p>`;
  });  
   // ejercicio 2  numero par o impar
   document.getElementById("formulario_lab2_ejer2").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página
    const num = parseInt(document.getElementById("num").value);
    const resultado = document.getElementById("resultado_lab2_ejer2");
    let mensaje ="";
    if (isNaN(num)) {
    resultado.innerHTML = `<p style="color:red;"><strong>Por favor ingresa un número válido.</strong></p>`;
    return;
  }
        if(num % 2 == 0){
            mensaje ="  número par";
        } else{
            mensaje= "  número impar";   
        }
     // Mostrar en pantalla
    
    resultado.innerHTML = `<p><strong>El número ${num}  es:</strong> ${mensaje}</p>`;
  });  
  // ejercicio 3 condicionales si hay descuento 
   document.getElementById("formulario_lab2_ejer3").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página
    const compra = parseFloat(document.getElementById("compra").value);
    const resultado = document.getElementById("resultado_lab2_ejer3");
    let mensaje ="";
    let desc=0; total_compra=0;
    
    total_compra = 0;
    
    if (isNaN(compra)) {
    resultado.innerHTML = `<p style="color:red;"><strong>Por favor ingresa un valor numérico válido.</strong></p>`;
    return;
  }
        if(compra >=100){
            mensaje ="  tienes descuento del 10 %";
            desc = (compra*10/100);
            total_compra = compra - desc;
        } else{
            mensaje= "  no tiene descuento"; 
            desc = 0.0;
            total_compra = compra - desc;
        }
     // Mostrar en pantalla
    resultado.innerHTML = `
    <p><strong>${mensaje}</strong></p>
    <p>Descuento aplicado: $${desc.toFixed(2)}</p>  
    <p>Total a pagar: $${total_compra.toFixed(2)}</p>`; // con 2 decimales
  });  

// ejercicio 4 número aleatorio. 
   document.getElementById("formulario_lab2_ejer4").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página
    const aleatorio = parseInt(document.getElementById("aleatorio").value);
    let resultado = document.getElementById("resultado_lab2_ejer4");
    
     let num_maquina = Math.floor(Math.random()* 10) +1;
     let mensaje ="";

    if (aleatorio >10 || aleatorio < 1 || isNaN(aleatorio)) {
    resultado.innerHTML = `<p style="color:red;"><strong>Por favor ingresa un valor numérico válido entre 1 y 10.</strong></p>`;
    return;
  } else if(num_maquina ===aleatorio){
        mensaje ="Felicidades !! Adivinaste el número";
  } else{
        mensaje ="lo siento el número era";
  }
     // Mostrar en pantalla
     resultado.innerHTML = `<p><strong>${mensaje} ,${num_maquina} </strong></p>`;
  });  


  //--------------------------------------laboratorio 3 arreglos y ciclos
                // ejercicio 1 recorre un arreglo y lo suma
     document.getElementById("formulario_lab3_ejer1").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que se recargue la página
    let numeros = [];
    let suma =0;
    let promedio=0;
for (let i = 0; i < 5; i++) {
        let valor = prompt(`Ingrese el número ${i + 1}:`);
         numeros.push(parseFloat(valor)); // Convertimos a número
         suma += parseFloat(valor);
        } // salida de mi programa
        promedio= suma/numeros.length;
        //resul por consola
        console.log("Arreglo de números:", numeros);
        console.log("Suma del arreglo:", suma);
        console.log("promedio del arreglo:", promedio);
        //resul por página en un párrafo.
        let resultado = document.getElementById("resultado_lab3_ejer1");
        resultado.innerHTML = `<p><strong>La suma de mi arreglo es: ${suma}</strong></p>
        <p><strong>El promedio de mi arreglo es: ${promedio}</strong></p>`;
      });
   //--------------------------------------laboratorio 3  ciclo WHILE
                // ejercicio 2 ingresar num hasta que sea # negativo);
    
        // ejercicio 2: ingresar números hasta que sea negativo
document.getElementById("formulario_lab3_ejer2").addEventListener("submit", function(event) {
event.preventDefault(); // Evita recargar la página   
    let num;
    while (true) {
        num = parseInt(prompt("Ingrese un número (negativo para salir):"));
        
        if (isNaN(num)) { // valida si no es número
            alert("Por favor, ingrese un número válido.");
            continue; // vuelve a pedir
        }

        if (num < 0) {
            break; // sale del bucle si es negativo
        }

        console.log("Número ingresado:", num);
    }

    console.log("Fin del ejercicio. Ingresaste un número negativo:", num);
    
});
//--------------------------------------laboratorio 3  ciclo DO WHILE
                // ejercicio 2 ingresar texto hasta que sea contraseña válida);
    
   document.getElementById("formulario_lab3_ejer3").addEventListener("submit", function(event) {
   event.preventDefault(); // Evita recargar la página
  let password;
   do{
        password= prompt("Ingrese contraseña hasta que sea válida");
      
   }while(password !== "sesion12");
   console.log("la contraseña es: sesion12");
});
//--------------------------------------laboratorio  4 calculadora y funciones
                // ejercicio 1 funciones de suma, resta, multipliccion y división

// Funciones matemáticas
function suma1(a, b) {
  return a + b;
}
function resta1(a, b) {
  return a - b;
}
function multiplicacion1(a, b) {
  return a * b;
}
function division1(a, b) {
  if (b === 0) return "No se puede dividir entre cero";
  return a / b;
}

// Esperar que el HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario_lab4_ejer2").addEventListener("submit", function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("op").value;
    const resultadoElement = document.getElementById("resultado_lab4_ejer2");

    let resultado;

    switch (operacion) {
      case "suma1":
        resultado = suma1(num1, num2);
        break;
      case "resta1":
        resultado = resta1(num1, num2);
        break;
      case "multiplicacion1":
        resultado = multiplicacion1(num1, num2);
        break;
      case "division":
        resultado = division1(num1, num2);
        break;
      default:
        resultado = "Operación no válida..";
    }

    resultadoElement.innerHTML = `<p><strong>Resultado:</strong> ${resultado}</p>`;
  });
});
