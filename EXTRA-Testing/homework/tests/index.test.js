const { checkSeatStatus } = require('../homework');
const { getRowNumber } = require('../homework');
const { book } = require('../homework');
describe('checkSeatStatus' , () =>{

  it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
  });
  
  it('should throw a TypeError if first parameter is not a string', () => {
      expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
    });
  
  it('should throw a TypeError if second parameter is not a number', () => {
      expect(() => checkSeatStatus('hola','bc')).toThrow(new TypeError('Second parameter is not a number'));
    });
   
   it('should return false if the letter given is A and the column is 2', () => {
      expect(checkSeatStatus('A',1)).toBe(true);
    });
    it('should return true if the letter given is E and the column is 4', () => {
      expect(checkSeatStatus('E',3)).toBe(false);
    });

  });

describe('book' , () => {
//test para funcion book
  it('should return true if the letter given is A and the column is 0 can be booked', () => {
    expect(book('A',0)).toBe('Seat in A0 successfully booked');
  });
  it('should return true if the letter given is b and the column is 1 cant be booked', () => {
    expect(book('B',1)).toBe('Seat in B1 is already booked');
  });
//test para funcion getRowNumber
  it('should return 1 if the letter given is an A', () => {
    expect(getRowNumber('A')).toBe(0);
  });
  
  it('should return 3 if the letter given is a C', () => {
    expect(getRowNumber('C')).toBe(2);
  });

//extra test para verificar q realmente se cambio
  it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
    expect(checkSeatStatus('E',3)).toBe(false);
    expect(book('E',3)).toBe('Seat in E3 successfully booked');
    expect(checkSeatStatus('E',3)).toBe(true);
  });

  

  });

  