import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';

class FakeRouter {
  navigate(params) {

  }
}

class FakeActivateRoute {
  // params: Observable<any> = EMPTY;
  private subject = new Subject();

  get params() {
    return this.subject.asObservable();
  }

  push(valor) {
    this.subject.next(valor);
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivateRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a medico cuando se guarde', function() {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id = nuevo', function() {
    component = fixture.componentInstance;

    // @ts-ignore
    const activatedRoute: FakeActivateRoute = TestBed.inject(ActivatedRoute);

    activatedRoute.push({ id: 'nuevo' });

    expect(component.id).toBe('nuevo');
  });
});
