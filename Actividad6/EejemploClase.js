

// Ejemplo de clase

var Lista = [1, 55, 3, 10, 7, 99]

function BuscarNumero (lista,numero){
    for (var i = 0; i < lista.length; i++){
        if (lista[i] === numero){
            console.log("El número ingresado fue: ", + numero, "y se encuentra en la index:", i)
        }
        
    }

}
BuscarNumero(Lista, 99)