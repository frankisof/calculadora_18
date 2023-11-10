import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component'; // Ajusta la ruta según tu estructura

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UiComponent,  // Asegúrate de incluir AppUiComponent en las declaraciones
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing-calculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('calculadora');
  });




});