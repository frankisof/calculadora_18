import { addition } from "./addition"

describe('addition unit tests', () => {
    
    it('Should add 88 + 2 = 90', () => {
        let result = 0;
        result = addition(88, 2);
        expect(result).toBe(90);
    })

    it('Should add 0 + -2 = -2', () => {
        let result = 0;
        result = addition(0, -2);
        expect(result).toBe(-2);
    })

    it('Should add 3.0 + 0.1416 = 3.1416', () => {
        let result = 0;
        result = addition(3.0, 0.1416);
        expect(result).toBe(3.1416);
    })

    
})