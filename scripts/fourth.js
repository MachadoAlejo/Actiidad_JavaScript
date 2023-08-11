//  Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. Considera que el cobro es con base en las horas que lo disponen y que las fracciones de hora se toman como completas, realiza el algoritmo que permita determinar el cobro. 

const hourPrice = 4000;

let totalHour = parseInt(prompt("Ingrese el total de horas a pagar"));
console.log(`Cancelo ${totalHour} horas`);
alert(`Cancelo ${totalHour} horas`);

const TotalPay = (hourPrice*totalHour);

let additionalMinutes = parseInt(prompt("Ingrese los minutos de mas que estuvo"));
console.log(`Cancelo ${additionalMinutes} minutos de mas`);
alert(`Cancelo ${additionalMinutes} minutos de mas`);

if (additionalMinutes> 0) {
 TotalPrice= TotalPay + hourPrice;
    console.log(`el valor total a pagar son ${TotalPrice} pesos`);
    alert(`el valor total a pagar son ${TotalPrice} pesos`);
}

 





