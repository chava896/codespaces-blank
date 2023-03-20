let total = 0; 
let num = prompt ("Escribe un número");
for(let i=0; i<= num; i++){
    total += i;
}
function imprimirnumeros(){
    for (i = 1; i <= num; i++){
        document.write("<p class='simple-text'> + "+ i);
    }
}
document.write("<p class='numbers'> La suma es " + total );
imprimirnumeros();

