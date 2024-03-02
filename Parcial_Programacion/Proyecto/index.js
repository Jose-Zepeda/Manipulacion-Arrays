const numeros = [1, 2, 3, 4, 5];

// **forEach** - Itera sobre cada elemento del array y ejecuta una función para cada uno.
numeros.forEach((numero) => {
  console.log(numero);
});

// **map** - Crea un nuevo array con el resultado de ejecutar una función para cada elemento del array original.
const numerosDobles = numeros.map((numero) => {
  return numero * 2;
});

console.log(numerosDobles); // [2, 4, 6, 8, 10]

// **filter** - Crea un nuevo array con los elementos del array original que cumplen con una condición.
const numerosPares = numeros.filter((numero) => {
  return numero % 2 === 0;
});

console.log(numerosPares); // [2, 4]

// **find** - Devuelve el primer elemento del array que cumple con una condición.
const numeroEncontrado = numeros.find((numero) => {
  return numero === 3;
});

console.log(numeroEncontrado); // 3

// **some** - Devuelve `true` si al menos un elemento del array cumple con una condición.
const hayUnNumeroPar = numeros.some((numero) => {
  return numero % 2 === 0;
});

console.log(hayUnNumeroPar); // true

// **every** - Devuelve `true` si todos los elementos del array cumplen con una condición.
const todosLosNumerosSonPares = numeros.every((numero) => {
  return numero % 2 === 0;
});

console.log(todosLosNumerosSonPares); // false

// **reduce** - Reduce el array a un solo valor, acumulando el resultado de ejecutar una función para cada elemento del array.
const sumaTotal = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
});

console.log(sumaTotal); // 15

// **sort** - Ordena los elementos del array.
numeros.sort();

console.log(numeros); // [1, 2, 3, 4, 5]

// **reverse** - Invierte el orden de los elementos del array.
numeros.reverse();

console.log(numeros); // [5, 4, 3, 2, 1]

// **join** - Une los elementos del array en una cadena.
const cadenaNumeros = numeros.join(", ");

console.log(cadenaNumeros); // "1, 2, 3, 4, 5"

// **split** - Divide una cadena en un array de subcadenas.
const palabras = "Hola mundo".split(" ");

console.log(palabras); // ["Hola", "mundo"]

// **push** - Agrega un nuevo elemento al final del array.
numeros.push(6);

console.log(numeros); // [1, 2, 3, 4, 5, 6]

// **pop** - Elimina el último elemento del array.
numeros.pop();

console.log(numeros); // [1, 2, 3, 4, 5]

// **shift** - Elimina el primer elemento del array.
numeros.shift();

console.log(numeros); // [2, 3, 4, 5]

// **unshift** - Agrega un nuevo elemento al principio del array.
numeros.unshift(0);

console.log(numeros); // [0, 1, 2, 3, 4, 5]

// **indexOf** - Devuelve el índice de la primera aparición de un elemento en el array.
const indiceDeDos = numeros.indexOf(2);

console.log(indiceDeDos); // 1

// **lastIndexOf** - Devuelve el índice de la última aparición de un elemento en el array.
const ultimoIndiceDeDos = numeros.lastIndexOf(2);

console.log(ultimoIndiceDeDos); // 1

// **includes** - Devuelve `true` si el elemento se encuentra en el array.
const contieneDos = numeros.includes(2);

console.log(contieneDos); // true

// **slice** - Crea un nuevo array con una copia de una sección del array original.
const subArray = numeros.slice(1, 4);

console.log(subArray); // [2, 3, 4]

// **splice** - Elimina elementos del array original y/o
numeros.splice(2, 1, "tres");

console.log(numeros);

// **concat** - Crea un nuevo array uniendo el array original con uno o más arrays.
const nuevoArray = numeros.concat([6, 7]);

console.log(nuevoArray); // [1, 2, 3, 4, 5, 6, 7]

// **isArray** - Devuelve `true` si el valor es un array.
const esUnArray = Array.isArray(numeros);

console.log(esUnArray); // true

// **from** - Crea un nuevo array a partir de un objeto iterable.
const arrayDesdeString = Array.from("Hola mundo");

console.log(arrayDesdeString); // ["H", "o", "l", "a", " ", "m", "u", "n", "d", "o"]

// **keys** - Devuelve un objeto iterable con las claves del array.
const claves = numeros.keys();

console.log(claves); // [0, 1, 2, 3, 4]

// **values** - Devuelve un objeto iterable con los valores del array.
const valores = numeros.values();

console.log(valores); // [1, 2, 3, 4, 5]

// **entries** - Devuelve un objeto iterable con pares clave-valor del array.
const entradas = numeros.entries();

console.log(entradas); // [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]
