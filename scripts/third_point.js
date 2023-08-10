function calculateAge (birthYear,actualYear) {
    let age = (actualYear-birthYear)

    return age;
}

const actualYear = 2023;
let birthYear = parseInt(prompt("Ingresa el año en que naciste"));

if (isNaN (birthYear)) {
    alert("Ingrese valores validos");
} else {
const verifyAge = calculateAge (birthYear,actualYear)
console.log(verifyAge)
alert(`Actualmente tiene ${verifyAge} años`);

}