function calcularHipotenusa (catetoA,catetoB) {
let H = (catetoA**2) + (catetoB**2)

return H;
} 

let catetoA = parseFloat(prompt("Ingrese la medida del cateto A"));
console.log(`El cateto A mide ${catetoA} cm`);

let catetoB = parseFloat(prompt("Ingrese la medida del cateto B"));
console.log(`El cateto B mide ${catetoB} cm`);

let long =calcularHipotenusa (catetoA,catetoB);

hypotenuse = (Math.sqrt(long))
console.log(`La hipotenusa mide ${hypotenuse} cm`)
alert(`La hipotenusa mide ${hypotenuse} cm`)

