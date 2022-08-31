'use strict'
// No cambies los nombres de las funciones.






function quickSort(array)
{
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  function getRandomInt(tamaño) 
  {
    return Math.floor(Math.random() * tamaño);
  }
  
  if (array.length <= 1) return array
  
    // var ipivote= //obtengo una posicion aleatoria segun tamaño
     var pivote = array[getRandomInt(array.length)]// obtengo su valor de pivote
     var lizq=[]
     var lder=[]
     var igual=[]
     var tmparray=[]
       console.log("pivote: "+ pivote)
      for(let i=0 ; i < array.length; i++)
      {
         if(array[i] <pivote)
         {
              lizq.push(array[i])

         }else if(array[i] > pivote)
         {
              lder.push(array[i])
         } else if(array[i] === pivote)
         {
               igual.push(array[i])
         }
      }
  return quickSort(lizq).concat(igual).concat(quickSort(lder))
  
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if (array.lentgh ===1) return array

let division=split(array)
let izq = division[0]
let der = division[1]

return unir(mergeSort(izq), mergeSort(der))

}
	//funcion para dividir array
  function split(array)
  {
  	let medio= Math.floor(array.lemgth/2)
    console.log(medio)
    let izq= array.slice(0, medio)
    console.log(izq)
    let der= array.slice(medio)
    console.log(der)
    return [izq, der]
  }
  
  function unir(izq,der)
  {
  	let array =[]
    let izqindex=0
    let derindex=0
    while(izqindex < izq.length&& der.lentgh)
    {
    	if(izq[izqindex] < der[derindex])
      {
      	array.push(izq[izqindex])
       	izqindex++
      }else {
      	array.push(der[derindex])
        derindex++
      }
    	
    
    }
  }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
