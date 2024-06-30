//6.a
function Suma(a, b) {
    return a + b;
}
console.log(Suma(456, 876));

//6.b
function SumaVal(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Error en parametros");
        return NaN;
    }
    return a + b;
}
console.log(SumaVal(88, "wesd"));

//5.c
function EsInt(num) {
    return Number.isInteger(num);
}
console.log(EsInt(200));
console.log(EsInt(7.95));

//5.d
function SumaE(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    if (!EsInt(a) || !EsInt(b)) {
        alert("Número no entero");
        a = Math.round(a);
        b = Math.round(b);
    }
    return a + b;
}
console.log(SumaE(9, 90.8));

//5.e
function Round(n) {
    if (!EsInt(n)) {
        alert("Número no es entero. Se redondeará");
        return Math.round(n);
    }
    return n;
}

function SumaR(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    a = Round(a);
    b = Round(b);
    return a + b;
}
console.log(SumaR(9, 90,8))