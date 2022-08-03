'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var acumulador=0
 for (var i=0; i<num.length; i++)
 {	
 		var puntero=(Number(num.length)-i-1)
    //console.log("el valor del puntero es:"+ puntero)
    var item =Number(num[puntero])
    
    console.log("el valor del item:"+puntero+" es: " + item)
    var sumatmp
    sumatmp=(2**i) * item
    acumulador= acumulador + sumatmp
    //console.log("item : "+sumatmp)
 }
 return acumulador
 //Sumatoria de 2^Posicion * valor
//2^0 = 1 * 1 =  1
//2^1 = 2 * 1 =  2
//2^2 = 4 *1 =  4
//2^3 = 8 * 1 =  8
//2^4 = 16 * 0 = 0
//2^5 = 32 * 1 = 32
//2^6 = 64 * 0 =  0
//2^7 = 128 * 0 = 0
//               43
}


function DecimalABinario(num) {
  // tu codigo aca
  var acumulador=[];
  var flag=0;
  var item =Number(num)
  var cociente=0
  var resto=0
  var binario=''
     do{	
    	cociente  = Math.trunc(item /2)
      resto= item%2
      acumulador.unshift(resto)
			item=cociente
      //console.log("cociente de la division es:" +cociente)
      //console.log("resto de la division es:" +resto)
      flag=Number(cociente) ===0
  	  }while(!flag )
      
      for(var i=0; i < acumulador.length; i++)
      {
      	binario=binario + acumulador[i]
      }
      
    return binario
//19 -> codigo binario???
//19/2 = 9 (1)
//9/2 = 4 (1)
//4/2 = 2 (0)
//2/2 = 1 (0)
// 1/2 = 0(1)
// 19 = 10011

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}