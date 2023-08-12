const notaExamen1 = parseFloat(prompt("Ingrese la nota del primer examen"));
const notaExamen2 = parseFloat(prompt("Ingrese la nota del segundo examen"));
const notaExamen3 = parseFloat(prompt("Ingrese la nota del tercer examen"));

const ponderacionExamen1 = 0.25;
const ponderacionExamen2 = 0.25;
const ponderacionExamen3 = 0.5;

const promedio = (notaExamen1 * ponderacionExamen1) + (notaExamen2 * ponderacionExamen2) + (notaExamen3 * ponderacionExamen3);

console.log(`El promedio del alumno es: ${promedio}`);