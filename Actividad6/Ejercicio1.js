// 1. Concatena los siguientes arreglos:
// var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
// var comingSoonAnimals = ['panter', 'dragon', 'turtle']
// 2. Acomoda el arreglo de menor a mayor: var arr = [ 4, 6, 1, 0, 8, 2 ]
// 3. Agrega un nuevo animal (‘cow’) al arreglo de animals
// 4. Retira el elemento ‘eagle’ del arreglo animals

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion'];
var comingSoonAnimals = ['panter', 'dragon', 'turtle'];
var concatenado = animals.concat(comingSoonAnimals);


concatenado.sort();
concatenado.push("cow");
concatenado.splice(2,1);
console.log(concatenado.reverse());