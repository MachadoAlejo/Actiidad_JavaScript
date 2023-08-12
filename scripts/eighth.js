const sueldoMensual = parseFloat(prompt("Ingrese su sueldo mensual"));
const semanasPorMes = 4;
const porcentajeAhorro = 0.15;

const ahorroSemanal = sueldoMensual * porcentajeAhorro;
const ahorroMensual = ahorroSemanal * semanasPorMes;
const ahorroAnual = ahorroMensual * 12;



console.log(`Su ahorro es de $${ahorroAnual} en un año.`);
alert(`Su ahorro es de $${ahorroAnual} en un año.`);