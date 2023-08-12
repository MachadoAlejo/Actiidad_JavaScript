// Una empresa de pinturas requiere determinar cuánto cobrar por trabajos de pintura. Considera que se cobra por m2, realiza el algoritmo que le permita ir generando presupuestos para cada cliente. 
function calculatePrice (price,paintedMetres) {
totalValue= (price*paintedMetres)

return totalValue;
}

const price = 5500 ;
let paintedMetres = parseFloat(prompt("Ingrese cuantos metros tiene el espacio que desea pintar"));

let pay= calculatePrice (price,paintedMetres);

console.log(`Pintar su espacio le cuesta ${pay}$`)
alert(`Pintar su espacio le cuesta ${pay}$`)

