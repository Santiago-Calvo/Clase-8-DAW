//5.a
var warray = ["alamo", "torre", "robar", "gorra", "juguete"];
for (let i = 0; i < warray.length; i++) {
    alert(warray[i]);
    console.log(warray[i]);
}

//5.b
for (let i = 0; i < warray.length; i++) {
    warray[i] = warray[i].substring(0,1).toUpperCase() + warray[i].substring(1).toLowerCase();
    alert(warray[i]);
    console.log(warray[i]);
}

//5.c
var sentence = "";
for (let i = 0; i < warray.length; i++) {
    sentence += warray[i] + " ";

}
alert(sentence);


//5.d
var narray = [];
for (let i = 0; i < 10;i++){
    narray.push(i);
}
console.log(narray);