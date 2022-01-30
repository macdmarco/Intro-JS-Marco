const numA = parseFloat(prompt("Ingrese un primer número"))
const numB = parseFloat(prompt("Ingrese un segundo número"))
const numC = parseFloat(prompt("Ingrese un tercer número"))


if (numA > numB) {
    if (numA > numC) {
        alert("El primer número es el mayor")
    } else if (numC > numA) {
        alert("El tercer número es mayor")
    } else {
        alert("El primer y tercer número son iguales")
    }

} else if (numB > numA) {
    if (numB > numC) {
        alert("El segundo número es el mayor")
    } else if (numC > numB) {
        alert("El tercer número es el mayor")
    } else {
        alert("El segundo y tercer número son iguales")
    }

} else {
    alert("El segundo y primer número son iguales")
}

if (numA == numB && numA == numC){
    alert("Todos los números son iguales")
}
// La función parseFloat convierte todo lo ingresado a número.
