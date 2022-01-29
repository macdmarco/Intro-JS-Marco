const numA = parseFloat promnt("Ingrese un primer número")
const numB = parseFloat promnt("Ingrese un segundo número")
const numC = parseFloat promnt("Ingrese un tercer número")

if (numA > numB){
    if (numA > numC)
    alert ("El primer número ", numA, " es el mayor")
}

if (numB > numA){
    if (numB > numC)
    alert ("El segundo número ", numA, " es el mayor")
}

else if (numC > numA){
    if (numC > numB)
    alert ("El segundo número ", numA, " es el mayor")
}


// La función parseFloat convierte todo lo ingresado a número.
