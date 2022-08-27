'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
 var arreglo=[]
 var sumatoria=0
 let cuenta =1

 if(num%cuenta===0)
 {
 arreglo.push(cuenta) // caso 1
 //	console.log("entro")
 }
 else return 0
 cuenta ++;
 do { 
    if (num%cuenta=== 0) {
      arreglo.push(cuenta)
      
      num= num/cuenta

    }else 	cuenta ++
    
 }while (num/cuenta >= 1);

 return arreglo
 }
 function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 	  for (let i = 0; i < array.length; i++) 
    {
    	for(let j = 0; j <array.length-1; j++)
      {
      			if(array[j] > array[j+1])
            {
            		//console.log(array[i]+ " fila  : columna "+ array[j])
                var tmp= array[j];//salvo valor mayor
               // console.log("tmp: "+tmp)
                array[j]= array[j+1];//asigno valor menor
                array[j+1]=tmp;//asigno valor salvado mayor
								//console.log("indices: j:"+ i +" j+1:"+ j+1)
             
               console.log("arrayACt: "+ array)
            } 
      }	 
  	} return array
	
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1 ; i < array.length ; i++) {
    	//guarda posicion anteriore
      let x=i-1
      //guarda posicion actual
      var tmp =array[i]
      while(x>=0 &&  tmp < array[x])//valor actual es < al anteior
      {
      	array[x+1]=array[x]
        array[x]= tmp
        x--
      }
      
          
  }
  return array
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
	
  //identificar nro mas chico
  for(let i=0; i<array.length; i++)
  {
  	//asumir el mas chico esta en el i
    let min =i
    //recorre el array buscando el numero menor
    for(let x= i+1; x <array.length; x++)
    {
    	if(array[min]> array[x]) min=x //actualizamos la posicion del menor
    }
    //hacemos swap entre el numero mas chico y el 1er valor
    if(i !== min)
    {
    	let tmp= array[i]
      array[i]=array[min]
      array[min]=tmp
    }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
