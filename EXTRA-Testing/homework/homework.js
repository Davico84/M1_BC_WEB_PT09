const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];

function checkSeatStatus(row, number) {
    if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');

    var numFila=getRowNumber(row)// aqui obtengo la posicion de la fila en el array segun la letra q se envie
    var columnabutaca=layout[numFila]//aqui obtengo las columnas de la fila
    var asiento= columnabutaca[number]//aqui especifico que columna deseo obtener su asiento
    return asiento.booked
  }

function book(row,number)
{
    
    if (checkSeatStatus(row,number) === false) 
    {
        layout[getRowNumber(row)][number].booked=true 
        return `Seat in ${row}${number} successfully booked`
    }
    else return `Seat in ${row}${number} is already booked`

}
function getRowNumber (row)
{
    return row.charCodeAt(0) - 65
}
//aplicando factoreo, se creo getSeat para evitar reutilizar codigo
/*ifunction getSeat(letter, number) {
  const numberRow = getRowNumber(letter);
  const layoutRows = layout[numberRow];
  const seat = layoutRows[number];
  return seat;
} 

function checkSeatStatus(row, number) {
  if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
  if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');

  const seat = getSeat(row, number);
  return seat.booked;
}

function book(row, number) {
  if(checkSeatStatus(row,number)) return `Seat in ${row}${number} is already booked`;
  const seat = getSeat(row, number);
  seat.booked = true;
  return `Seat in ${row}${number} successfully booked`
}*/
module.exports = {
  checkSeatStatus,
  getRowNumber, 
  book
}