import { logaritmo } from "./logaritmo"

describe('logaritmo unit tests', () => {
    it('should calculate the natural logarithm of 19', () => {
        const result = logaritmo(19,0);
        expect(result).toBe(Math.log(19));
      });
    
      it('should calculate the natural logarithm of 2', () => {
        const result = logaritmo(2,0);
        expect(result).toBeCloseTo(Math.log(2));
      });
    
      it('should return NaN for the natural logarithm of 8', () => {
        const result = logaritmo(8,0);
        expect(result).toBeCloseTo(Math.log(8));
      });
    });
   
