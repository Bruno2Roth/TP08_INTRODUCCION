function calcularEdad(fecha, nombre) {
  // ---------------------------------------------------------
  // 1) Calculadora de edad
  // ---------------------------------------------------------
  // Crear una función que reciba un string con una fecha en formato 'YYYY-MM-DD'
  // y devuelva un número con la edad de la persona.
  //
  // Pedir al usuario su nombre y su fecha de nacimiento. Luego, mostrar en la consola
  // un mensaje que diga "Hola [nombre], tienes [edad] años!"

  if (!(fecha[4] === "-") || !(fecha[7] === "-")) {
    document.getElementById("mensaje1").innerHTML = "Poné bien la fecha";
  } else {
    const partes = fecha.split("-");

    let edad = 2025 - parseFloat(partes[0]);

    if (
      parseFloat(partes[1]) > 9 ||
      (parseFloat(partes[1]) === 9 && parseFloat(partes[2]) === 12)
    ) {
      edad -= 1;
    }

    document.getElementById(
      "mensaje1"
    ).innerHTML = `Hola ${nombre}, tienes ${edad} años!`;
  }
}

function tirarFruta(fruta) {
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

  const frutas = [
    "manzana",
    "banana",
    "frutilla",
    "pera",
    "durazno",
    "uva",
    "mandarina",
    "naranja",
    "kiwi",
    "durian",
  ];

  if (!frutas.includes(fruta.toLowerCase())) {
    document.getElementById("mensaje2").innerHTML = `No, no tenemos ${fruta}!`;
  } else {
    document.getElementById("mensaje2").innerHTML = `Sí, tenemos ${fruta}!`;
  }
}

function compararDatos() {
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

  let sino = false;
  let concatenacion = "";

  if (10 == "10") {
    sino = true;
  }
  concatenacion += `A. ${sino}, `;

  if (10 === "10") {
    sino = true;
  } else {
    sino = false;
  }
  concatenacion += `B. ${sino}, `;

  sino = typeof 10.6;
  concatenacion += `C. ${sino}, `;

  if (true == 1) {
    sino = true;
  } else {
    sino = false;
  }
  concatenacion += `D. ${sino}, `;

  document.getElementById("mensaje3").innerHTML = concatenacion.slice(0, -2);
}

function yoObjeto() {
  // ---------------------------------------------------------
  // 4) Yo objeto
  // ---------------------------------------------------------
  // Una conclusión importante del punto anterior es que al usar el operador ==,
  // JavaScript puede realizar conversiones automáticas de tipo de dato,
  // lo que puede llevar a resultados inesperados si no se tiene cuidado.
  //
  // Crear un objeto de tipo ciudad con los campos:
  // nombre, fechaFundacion, poblacion, extensión.
  // Recorrer y mostrar todos las claves y v    alores por separado del objeto ciudad.
  //
  // Opcional: Validar todos los ingresos de datos

  const ciudad = {
    nombre: "Padua",
    Fundada: 1922,
    población: 37775,
    extensión: "6,25km",
  };
  let msg = "";
  for (const prop in ciudad) {
    console.log();
    msg = msg + `${prop}: ${ciudad[prop]} `;
  }
  document.getElementById("mensaje4").innerHTML = msg;
}

function doblarArray(arrayNumeros) {
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

  let arrayDeEnteros = arrayNumeros.split(",").map((num) => parseInt(num));

  const dobles = arrayDeEnteros.map((num) => num * 2);

  document.getElementById("mensaje5").innerHTML = dobles.join(", ");
}

function dibujarTriangulos() {
  // ---------------------------------------------------------
  // 6) Triángulo de asteriscos
  // ---------------------------------------------------------
  // Si no usaste la función map de array en el ejercicio anterior revisalo
  // y buscá cómo resolverlo de esa forma.
  //
  // ¿Cómo harías para dibujar en la consola el siguiente triángulo de asterisco?
  //
  // *
  // **
  // ***
  // ****
  // *****

  for (let i = 1; i <= 5; i++) {
    document.getElementById("trianguloA" + i).innerHTML = "*".repeat(i);
  }

  // ¿Y este?
  //
  // ----*----
  // ---***---
  // --*****--
  // -*******-
  // *********

  let a = 1;

  for (let i = 1; i <= 9; i += 2) {
    let gns = (9 - i) / 2;
    document.getElementById("trianguloB" + a).innerHTML =
      "-".repeat(gns) + "*".repeat(i) + "-".repeat(gns);
    a++;
  }
}

function filtrarNombres(lista) {
  // ---------------------------------------------------------
  // 7) Nombres con 'A'
  // ---------------------------------------------------------
  // En el ejercicio anterior hay una gran oportunidad para usar
  // el método repeat de string.
  //
  // Se debe solicitar al usuario que ingrese una lista de nombres separados por coma.
  // Luego, muestra en el DOM los nombres que comienzan con la letra 'A'.
  lista = lista.toLowerCase();
  lista = lista.replaceAll(" ", "");
  let nombres = lista.split(",");

  let msg = "";
  nombres.forEach((nombre) => {
    if (nombre[0] === "a") msg = msg + " " + nombre;
  });

  document.getElementById("mensaje7").innerHTML = msg;
}

function reemplazarPalabra(texto, reemplazar, reemplazo) {
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

  let t = texto.replaceAll(reemplazar, reemplazo);
  document.getElementById("mensaje8").innerHTML = t;
}

function cortarTexto(textoCortar, numCaracteres) {
  // ---------------------------------------------------------
  // 9) Cortar texto
  // ---------------------------------------------------------
  // ¿Usaste el método replace en el punto anterior?
  //
  // Se debe solicitar al usuario que ingrese una cadena de texto y un número.
  // Luego, muestra en el DOM una nueva cadena que contenga los primeros caracteres
  // de la cadena original, según el número proporcionado.
  let resultado = textoCortar.slice(0, numCaracteres);
  document.getElementById("mensaje9").innerText = resultado;
}

function separarLista(texto) {
  // ---------------------------------------------------------
  // 10) String con separador
  // ---------------------------------------------------------
  // Se debe solicitar al usuario que ingrese una lista de elementos separados por coma.
  // Luego, muestra en el DOM un string que contenga todos los elementos
  // del array separados por ' - '.

  let a = texto.split(",");

  a = a.join("-");
  document.getElementById("mensaje10").innerText = a;
}

function calcularRecaudacion(pedidosInput) {
  // ---------------------------------------------------------
  // 11) Calculadora de Recaudación
  // ---------------------------------------------------------
  // Se le solicitará al usuario que ingrese una lista de objetos pedidos
  // junto con sus respectivos totales, separados por coma.
  // Cada pedido se debe ingresar en el formato "nombre:total".
  // Ejemplo de ingreso: "Pizza:15.50, Hamburguesa:8.75, Bebidas:4.25".
  //
  // Luego, muestra en el DOM la recaudación total sumando
  // todos los montos de los pedidos.

  let pedidosArray = pedidosInput.split(",");
  let recaudacionTotal = 0;
  pedidosArray.forEach((pedido) => {
    let [nombre, total] = pedido.split(":");
    total = parseFloat(total);
    recaudacionTotal += total;
  });

  document.getElementById(
    "mensaje11"
  ).innerHTML = `Recaudación total: ${recaudacionTotal}`;
}
