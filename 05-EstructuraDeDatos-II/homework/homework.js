"use strict";

const { add, remove } = require("@11ty/eleventy/src/TemplateCache");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList
{
  constructor ()
  {
    this.head=null;
  }
  add(data){
    let node= new Node(data)
    let current= this.head
    //si esta vacio
    if (!current)
    { 
      this.head=node
      return node 
    }
    //si hay nodos recorremos
    while (current.next) {
      current=current.next
    }
    current.next= node
    return node
  };
  remove(){
    //si la lista esta vacia
    if(!this.head) return null 
    
    if(this.head && !this.head.next)//si la lista tiene un elemento
    {
      let rmNode= this.head;
      this.head=null;
      return rmNode.value
    }
    // si la lista tiene muchos valores
    let current= this.head
    while (current.next.next) {
      current= current.next
    }
    let rmNode= current.next
    current.next=null;
    return rmNode.value

  };
  search(value)
  {
    if (!this.head) return null //si esta vacia ya fue
    let current= this.head;
    while(current)
    {
      if(current.value === value) return current.value;
      else if (typeof value=== 'function')// evalua caso de funcion recursiva
      {
          if (value(current.value)) return current.value
      }
      current= current.next
    }
    return null

  };
}

class Node 
{
  constructor (data)
  {
    this.value = data
    this.next = null
  }
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() 
{
  //arreglo de objetos
  this.numBuckets =35;
  this.bucket = {};
}
//hash: función hasheadora que determina en qué bucket se almacenará un dato. 
//Recibe un input alfabético, suma el código numérico de cada caracter del input 
//(investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; 
//de esta manera determina la posición de la tabla en la que se almacenará el dato.
HashTable.prototype.hash= function(string) {
  var acc=0
  for (let i = 0; i < string.length; i++) {
    acc+=string.charCodeAt(i)
  }
  return acc % this.numBuckets//430%35 ->nro enter 0 y 34
}
HashTable.prototype.set = function(llave,valor){
  if (typeof llave !='string') throw new TypeError('keys must be strings');
  let hashedString=this.hash(llave)

  if(this.bucket[hashedString]){// si existe el objeto
    var objeto= this.bucket[hashedString]//aqui jala la posicion del objeto
    objeto[llave]=valor //segun la posicion agrego valor al objeto
  }else {
    var objeto= {}
    this.bucket[hashedString]=objeto
    objeto[llave]= valor
  }
}
HashTable.prototype.get= function(llave){
  var hashedString= this.hash(llave)
  var objeto= this.bucket[hashedString]
  return objeto[llave]
}
HashTable.prototype.hasKey= function(llave){
  return !!this.get(llave)
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
