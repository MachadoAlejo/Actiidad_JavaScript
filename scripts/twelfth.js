const valorTotalCompra = parseFloat(prompt("Ingrese el valor total de la compra"));

const cuota1 = valorTotalCompra;
const cuota2 = valorTotalCompra / 2;
const totalCuota2 = cuota2 * 1.05; // 5% de recargo
const cuota6 = valorTotalCompra / 6;
const totalCuota6 = cuota6 * 1.4; // 40% de recargo

console.log(`Formas de Pago:`);
console.log(`1 cuota de $${cuota1} (0% de recargo)`);
console.log(`2 cuotas de $${cuota2} total $${totalCuota2} (5% de recargo)`);
console.log(`6 cuotas de $${cuota6} total $${totalCuota6} (40% de recargo)`);