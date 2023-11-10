import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
    // Arrange
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.addition();
    const result = component.result;

    // Assert
    expect(result).toBe(4);
  });

  it('Should set operator1 model through ngModel', async () => {
    await fixture.whenStable();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    await fixture.whenStable();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    expect(component.operator2).toEqual(2.71);
  });

  it('should add operator1 and operator2 when i click the addition button ', () => {
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    const additionButton = fixture.debugElement.query(By.css('.addition-button'));
    additionButton.triggerEventHandler('click', null);
    expect(component.result).toBe(7.5);
  });
  it('Should call substraction method', () => {
    component.operator1 = 8;
    component.operator2 = 3;
    component.substraction();
    expect(component.result).toBe(5);
  });
  


  it('Should handle logarithm of a negative number gracefully', () => {
    component.operator1 = -5;
    component.operator2 = 2;
    component.logaritmo();
    // Ajusta esto según lo que realmente debería ser el mensaje de error en tu implementación
    expect(component.result).toBeNaN(); // o cualquier otro valor que represente un error para tu lógica
  });
  it('Should calculate tangent of operator1 and update result', () => {
    component.operator1 = 45;
    component.tangente();
    expect(component.result).toBeCloseTo(1); // Ajusta el valor esperado según tus cálculos reales
  });
  it('Should calculate sine of operator1 and update result', () => {
    component.operator1 = 30;
    component.seno();
    expect(component.result).toBeCloseTo(0.5); // Ajusta el valor esperado según tus cálculos reales
  });
  it('Should calculate cosine of operator1 and update result', () => {
    component.operator1 = 60;
    component.coseno();
    expect(component.result).toBeCloseTo(0.5); // Ajusta el valor esperado según tus cálculos reales
  });
  
  it('Should subtract operator2 from operator1 and update result', () => {
    component.operator1 = 10;
    component.operator2 = 4;
    component.substraction();
    expect(component.result).toBe(6);
  });
  it('should initialize variables to zero in ngOnInit', () => {
    component.ngOnInit();
    expect(component.result).toBe(0);
    expect(component.operator1).toBe(0);
    expect(component.operator2).toBe(0);
  });
  it('should subtract two decimal numbers and update result', () => {
    component.operator1 = 5.5;
    component.operator2 = 2.2;
    component.substraction();
    expect(component.result).toBeCloseTo(3.3); // Ajusta el valor esperado según tus cálculos reales
  });
 
  it('should handle logarithm of a negative number gracefully', () => {
    component.operator1 = -5;
    component.logaritmo();
    // Ajusta esto según lo que realmente debería ser el mensaje de error en tu implementación
    expect(component.result).toBeNaN(); // o cualquier otro valor que represente un error para tu lógica
  });

  it('should call ngOnInit and initialize variables', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
    // Asegúrate de que las variables se inicialicen correctamente
    expect(component.result).toBe(0);
    expect(component.operator1).toBe(0);
    expect(component.operator2).toBe(0);
  });
  it('should update result when the addition button is clicked', () => {
    component.operator1 = 5;
    component.operator2 = 3;
    const additionButton = fixture.debugElement.query(By.css('.addition-button'));
    additionButton.triggerEventHandler('click', null);
    expect(component.result).toBe(8);
  });
  it('should handle a specific case in a function', () => {
    // Proporciona valores específicos que deberían llevar a un camino particular en tu función
    component.operator1 = 10;
    component.operator2 = 5;
    component.addition();
    // Agrega expectativas según sea necesario
  });
  it('should handle multiplication of negative numbers', () => {
    component.operator1 = -4;
    component.operator2 = 6;
    component.multiplicacion();
    expect(component.result).toBe(-24); // Ajusta este valor según el resultado esperado
  });

  
  });
  


