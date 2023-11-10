import { coseno } from "./coseno"

describe('exp unit tests', () => {
    
    it('calcular coseno de 5', () => {
        let numero = 5;
        let result = coseno(5, 0);
        expect(result).toBeCloseTo(.9961947);
    })

    it('calcular coseno de 10', () => {
        let numero = 5;
        let result = coseno(10, 0);
        expect(result).toBeCloseTo(0.98480775);
    })

    it('calcular coseno de 10', () => {
        let numero = 5;
        let result = coseno(77, 0);
        expect(result).toBeCloseTo(.22495105434386492);
    })



})