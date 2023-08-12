const diasDeViaje = parseInt(prompt("Ingrese el número de días de viaje"));
const gastosHotelPorDia = parseFloat(prompt("Ingrese el costo diario del hotel"));
const gastosComidaPorDia = parseFloat(prompt("Ingrese el costo diario de comida"));

const gastosOtrosPorDia = 200; // 200 pesos diarios para otros gastos

const gastosTotalesPorDia = gastosHotelPorDia + gastosComidaPorDia + gastosOtrosPorDia;
const montoTotal = gastosTotalesPorDia * diasDeViaje;


console.log(`Gastos de Hotel: $${gastosHotelPorDia * diasDeViaje}`);
console.log(`Gastos de Comida: $${gastosComidaPorDia * diasDeViaje}`);
console.log(`Otros Gastos: $${gastosOtrosPorDia * diasDeViaje}`);
console.log(`Monto Total del Cheque: $${montoTotal}`);
alert(`Gastos de Hotel: $${gastosHotelPorDia * diasDeViaje}`);
alert(`Gastos de Comida: $${gastosComidaPorDia * diasDeViaje}`);
alert(`Otros Gastos: $${gastosOtrosPorDia * diasDeViaje}`);
alert(`Monto Total del Cheque: $${montoTotal}`);
