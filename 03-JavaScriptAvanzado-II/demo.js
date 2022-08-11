// // llamdo de funciones por CALL Y BIND
// var persona = {
//     nombre: 'Franco',
//     apellido: 'Chequer',
//     getNombre: function()
//               {
//                 var nombreCompleto = this.nombre + ' ' + this.apellido;
//                 return nombreCompleto;
//               }
//                   }
// var logNombre = function(arg1, arg2)
//                       {
//         console.log(arg1 +' '+ this.getNombre() +' '+ arg2);
//       }
// var imprimenom= function (arg1)
//       {
//         console.log(this.getNombre()+ arg1)
//       }


// logNombre.call(persona, 'Hola', ", Cómo estas?  - > call"); //Hola Franco Chequer , Cómo estas?

// var bindepersona = imprimenom.bind(persona," ,como estas - > Bind");
// bindepersona();
