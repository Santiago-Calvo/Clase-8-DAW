//3.a

let array =[ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] ;
console.log(array[4] + " " + array[10]);

//3.b
console.log(Array.from(array).sort());

//3.c
array.push("Elemento al final");
array.unshift("Elemento al principio");
console.log(array);

//3.d
array.shift()
array.pop();
console.log(array);

//3.e
console.log(Array.from(array).reverse());

//3.f
console.log(array.join());

//3.g
console.log(array.slice(array.indexOf("Mayo"),array.indexOf("Noviembre") + 1));



console.log("---------------------------");
