import { seno } from "./seno"

describe('sqr unit tests', () => {
    
    it('calcular seno de 8', () => {
        let numero = 8;
        let result = seno(numero);
        expect(result).toBeCloseTo(0.1391731);
    })

    it('calcular seno de 26', () => {
        let numero = 26;
        let result = seno(numero);
        expect(result).toBeCloseTo(0.43837115);
    })

    it('calcular seno de 99', () => {
        let numero = 99;
        let result = seno(numero);
        expect(result).toBeCloseTo(.98768834);
    })

   

})