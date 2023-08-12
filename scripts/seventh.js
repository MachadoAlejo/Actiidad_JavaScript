const originalPrice = parseFloat(prompt("Ingrese el precio del artículo"));
const discount = originalPrice * 0.20; 
const priceWithDiscount = originalPrice - discount; 

console.log(`El precio con el descuento es $${priceWithDiscount}`);
alert(`El precio con el descuento es $${priceWithDiscount}`);

const vat = priceWithDiscount * 0.15; 
console.log(`iva: ${vat}$`);
alert(`iva: ${vat}$`);

const TotalP= vat+priceWithDiscount;
console.log(`El precio que debe pagar es $${TotalP}`);
alert(`El precio que debe pagar es $${TotalP}`);












