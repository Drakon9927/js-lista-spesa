// Creo un Array
const listaSpesa = ["uova, spinaci, carne, pesce"];

// Itinerare con For
console.log("itero gli elementi usando for");
for (let i = 0; i < listaSpesa.length; i++) {
    const element = listaSpesa[i];
    console.log(i, element);
    
}

// convertire in ciclo while

console.log("itero gli elementi usando while");

let i = 0;
while ( i < listaSpesa.length) {
    const element = listaSpesa[i];
    console.log(i, element);

    i++;
    
}

console.log("i esiste ancora dopo while", i);

// Inserire in un li

