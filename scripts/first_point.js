function calculateTriangleArea(base, height) {
    const area = (base * height) / 2
    return area;
}

let base = parseFloat(prompt("Ingrese la base del triangulo"));
let height = parseFloat(prompt("Ingrese la altura del triangulo"));

if (isNaN(base) || isNaN(height))  {
    alert ("Por favor ingrese numeros validos");
} else {
    const trianguleArea = calculateTriangleArea(base, height);
    alert(`el area del triangulo es ${trianguleArea}`); 
}

