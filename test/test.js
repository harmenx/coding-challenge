const expect = require("chai").expect;
const groupArrayElements= require('../src/index.js');

describe('groupArrayElements', () => {
    describe('should return with valid input', () => {
        it('should return two arrays and a single array for a remainder', function(){
            const result = groupArrayElements([1 , 2, 3, 4, 5], 3);
            expect(result).deep.to.equal( [[1, 2], [3, 4], [5]]);
        });
        it('should return two arrays even arrays', function(){
            const result = groupArrayElements([1 , 2, 3, 4, 5, 6], 2);
            expect(result).deep.to.equal([[1, 2, 3], [4, 5, 6]]);
        });
    });
    describe('should be able to handle invalid input', () =>{
        it('should handle an empty array', function(){
            const result = groupArrayElements([], 2);
            expect(result).deep.to.equal([]);
        });
        it('should handle an undefined array', function(){
            const result = groupArrayElements([], 2);
            expect(result).deep.to.equal([]);
        });
    });
});