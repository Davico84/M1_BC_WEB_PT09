function cacheFunction() 
{
  var arreglo=[	obj= {
                      valor: 0 , 
                      llave: 0
  				 						}
              ]
  function retornar_valores()
  {
  		//console.log("la llave es: "+obj.llave+" el valor es: "+ obj.valor)
      console.log(arreglo)
  }
  return function square(n)
  			 {
  						var cuadrado = n* n	
              obj.valor= cuadrado
              obj.llave=n
              arreglo.push(obj)
              retornar_valores()
              return cuadrado
         } 
}
var squareCache = cacheFunction()
squareCache(5)
//squareCache(6)
//console.log(squareCache(6))