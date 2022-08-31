 
//copia exacta del arreglo original
//spreed operator
const arreglo = [1,2,3,4,5]
const arreglo2=[...arreglo,6]
//console.log(arreglo)
// console.log(arreglo2)

// arreglo2.push(2)
// console.log(arreglo)
/// console.log(arreglo2)
//const arr4= arreglo.map(n => return )


//destructuracion de arreglos
const arr1= ['goku', 'vegeta','gohan']
//manear clasica
//console.log(arr1[0])
//console.log(arr1[1])
//console.log(arr1[2])

// manera avanzada
const[abc]= arr1  //aqui traigo el primer elemento
const[,veg,]= arr1 //aqui llamo al valor de vegueta
const[,,ultimo]= arr1 //aqui llamo al valor de vegueta
//console.log(abc)//imprime goku
//console.log(veg)//imprime vegeta
//console.log(ultimo)//imprime gohan
//-----------------------

const usaEstado =(valor) => {
   return [valor,() =>{console.log('Hola Mundo')}]
}

const user2= usaEstado('goku')
//console.log(user2)
//user2[1]()

const [nombre, SetNombre]=user2 //destructurizando
console.log(nombre)
console.log(SetNombre)




