import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;

  });

  it('Debe de mostrar la leyenda y el progreso', async () => {
    component.leyenda = 'Progreso de carga';

    fixture.detectChanges();
    await fixture.whenStable();

    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(elem.innerHTML).toContain('Progreso de carga');

  });

  it('Debe de mostrar en el input el valor del progreso', async () => {
    component.cambiarValor(5);
    fixture.detectChanges();

    await fixture.whenStable();

    const elem: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

    expect(elem.value).toBe('55');
  });

  it('Debe de incrementar/decrementar en 5, con un click en el boton', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  /**
   * Asi lo hice yo
   */
  it('Debe de incrementar/decrementar en 5, con un click en el boton, visual en el HTML', async () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

    botones[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(elem.innerHTML).toContain('45');

    botones[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(elem.innerHTML).toContain('50');
  });

  /**
   * Asi lo hace el curso
   */
  it('En el titulo del componente debe mostre el progres', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click', null);
    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(elem.innerHTML).toContain('45');
  });

});
