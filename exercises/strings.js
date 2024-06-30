//2.a
let str1 = "pedro se fue al campo".toUpperCase();
console.log(str1);

//2.b
let str2 = "pedro se fue a la ciudad";
let result1 = str2.substring(0,5);
console.log(result1);

//2.c (con variable de 2.b)
let result2 = str2.substring(str2.length - 3);
console.log(result2);

//2.d
let str3 = "VariABLE De EJErCicio"
let result3 = str3.substring(0,1).toUpperCase() + str3.substring(1).toLowerCase();
console.log(result3);

//2.e
let str4 = "variable numero 4"
let n1 = str4.indexOf(" ");
console.log(n1);

//2.f

let str5 = "nOmBrE pRoPiO";
let result4 = str5.substring(0,1).toUpperCase() + str5.substring(1, str5.indexOf(" ")).toLocaleLowerCase()
+ str5.substring(str5.indexOf(" ") ,str5.indexOf(" ") + 2).toUpperCase() + str5.substring(str5.indexOf(" ") + 2) .toLowerCase();
console.log(result4);


console.log("---------------------------");
