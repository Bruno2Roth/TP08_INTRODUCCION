function calcularEdad(fecha, nombre) {
    // ---------------------------------------------------------
    // 1) Calculadora de edad
    // ---------------------------------------------------------
    // Crear una función que reciba un string con una fecha en formato 'YYYY-MM-DD'
    // y devuelva un número con la edad de la persona.
    //
    // Pedir al usuario su nombre y su fecha de nacimiento. Luego, mostrar en la consola
    // un mensaje que diga "Hola [nombre], tienes [edad] años!"

    
    if (!(fecha[4] === "-") || !(fecha[7] === "-")){
        document.getElementById("mensaje").innerHTML = "Poné bien la fecha"

    } else {

        const partes = fecha.split("-")

        let edad = 2025 - parseFloat(partes[0])

        if((parseFloat(partes[1]) > 9) || (parseFloat(partes[1]) === 9 && parseFloat(partes[2]) === 12))
        {
            edad -= 1
        }       

        document.getElementById("mensaje").innerHTML = `Hola ${nombre}, tienes ${edad} años!`;

    }

}
// ---------------------------------------------------------
// 2) Tirando fruta
// ---------------------------------------------------------
// Antes de avanzar con la resolución se recomienda chequear si se usó en el ejercicio anterior
// la clase Date y sus métodos.
//
// Crear un array de strings con 10 frutas y mostrarlo en consola de manera prolija.
//
// Pedir al usuario una fruta. Buscar la fruta en el array.
// Si la fruta existe, mostrar un mensaje que diga "Sí, tenemos [fruta]!".
// Si no existe, mostrar un mensaje que diga "No, no tenemos [fruta]!"

// ---------------------------------------------------------
// 3) Comparando datos y tipos
// ---------------------------------------------------------
// Tip para el punto anterior: los arrays de JavaScript tienen un método includes
// que puede ser muy útil.
//
// A. Comparar si 10 es igual a '10' con ==
// B. Comparar si 10 es igual a '10' con ===. ¿Qué diferencias encontrás?
// C. ¿De qué tipo de dato es 10.6?
// D. ¿Es cierto que para JavaScript true es == 1?
//    ¿Qué conclusiones podemos obtener?

// ---------------------------------------------------------
// 4) Yo objeto
// ---------------------------------------------------------
// Una conclusión importante del punto anterior es que al usar el operador ==,
// JavaScript puede realizar conversiones automáticas de tipo de dato,
// lo que puede llevar a resultados inesperados si no se tiene cuidado.
//
// Crear un objeto de tipo ciudad con los campos:
// nombre, fechaFundacion, poblacion, extensión.
// Recorrer y mostrar todos las claves y valores por separado del objeto ciudad.
//
// Opcional: Validar todos los ingresos de datos

// ---------------------------------------------------------
// 5) Doble de elementos
// ---------------------------------------------------------
// ¿Tuviste en cuenta en el punto anterior que los objetos en JavaScript
// permiten almacenar datos estructurados utilizando pares clave-valor
// y que podés recorrer un objeto usando un bucle for...in?
//
// Crear una función que, a raíz de recibir por parámetro un array de números,
// cree un nuevo array donde cada elemento sea el doble del elemento
// correspondiente en el array original.

// ---------------------------------------------------------
// 6) Triángulo de asteriscos
// ---------------------------------------------------------
// Si no usaste la función map de array en el ejercicio anterior revisalo
// y buscá cómo resolverlo de esa forma.
//
// ¿Cómo harías para dibujar en la consola el siguiente triángulo de asterisco?
//
// Triángulo 1
//
// ¿Y este?
//
// Triángulo 2

// ---------------------------------------------------------
// 7) Nombres con 'A'
// ---------------------------------------------------------
// En el ejercicio anterior hay una gran oportunidad para usar
// el método repeat de string.
//
// Se debe solicitar al usuario que ingrese una lista de nombres separados por coma.
// Luego, muestra en el DOM los nombres que comienzan con la letra 'A'.

// ---------------------------------------------------------
// 8) Reemplazar Palabras
// ---------------------------------------------------------
// Para trabajar con el DOM en el ejercicio anterior
// ¿usaste ID para identificar elementos e innerHTML para actualizar contenido?
//
// Se debe solicitar al usuario que ingrese una cadena de texto,
// una palabra que desea reemplazar y la palabra de reemplazo.
// Luego, muestra en el DOM la cadena resultante después de reemplazar
// todas las instancias de la palabra especificada.

// ---------------------------------------------------------
// 9) Cortar texto
// ---------------------------------------------------------
// ¿Usaste el método replace en el punto anterior?
//
// Se debe solicitar al usuario que ingrese una cadena de texto y un número.
// Luego, muestra en el DOM una nueva cadena que contenga los primeros caracteres
// de la cadena original, según el número proporcionado.

// ---------------------------------------------------------
// 10) String con separador
// ---------------------------------------------------------
// Se debe solicitar al usuario que ingrese una lista de elementos separados por coma.
// Luego, muestra en el DOM un string que contenga todos los elementos
// del array separados por ' - '.

// ---------------------------------------------------------
// 11) Calculadora de Recaudación
// ---------------------------------------------------------
// Para el punto anterior se recomienda investigar los métodos split y join
// si no se usaron.
//
// Se le solicitará al usuario que ingrese una lista de objetos pedidos
// junto con sus respectivos totales, separados por coma.
// Cada pedido se debe ingresar en el formato "nombre:total".
// Ejemplo de ingreso: "Pizza:15.50, Hamburguesa:8.75, Bebidas:4.25".
//
// Luego, muestra en el DOM la recaudación total sumando
// todos los montos de los pedidos.
