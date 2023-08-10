function calculteValueDollToPesos (pesos) {
    const convertion = (pesos*1) / 4000
    return convertion;
}

pesos= parseInt(prompt("Ingrese cantidad de pesos"));
console.log(pesos);

if (isNaN(pesos)) {
    alert ("ingrese numeros validos");
} else {
    const totalDollar = calculteValueDollToPesos(pesos);
    alert(`usted tiene ${totalDollar} USD`);
}