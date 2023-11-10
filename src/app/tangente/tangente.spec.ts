import { tangente } from "./tangente"

describe('division unit tests', () => {
    
    it('calcular coseno de 66', () => {
        let numero = 66;
        let result = tangente(numero, 0);
        expect(result).toBeCloseTo(2.2460367739042164);
    })

    it('calcular coseno de 74', () => {
        let numero = 74;
        let result = tangente(numero, 0);
        expect(result).toBeCloseTo(3.4874144438409087);
    })

    it('calcular coseno de 999', () => {
        let numero = 999;
        let result = tangente(numero, 0);
        expect(result).toBeCloseTo(-6.313751514675107);
    })

})