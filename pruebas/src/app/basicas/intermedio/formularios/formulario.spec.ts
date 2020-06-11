import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {
  let component: FormularioRegister;

  beforeEach(() => {
    component = new FormularioRegister(new FormBuilder());
  });

  it('Debe de crear un formulario con dos campos, email y password', () => {
    expect(component.form.contains('email')).toBeTrue();
    expect(component.form.contains('password')).toBeTrue();
  });

  it('El email debe ser obligatorio', () => {
    const control = component.form.get('email');
    control.setValue('');

    expect(control.valid).toBeFalse();
  });

  it('El email debe ser un email valido', () => {
    const control = component.form.get('email');
    control.setValue('sdfdsfsdfsdf@sdfsdf.cl');

    expect(control.valid).toBeTrue();
  });
});
