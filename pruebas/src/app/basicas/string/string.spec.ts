import { mensaje } from './string';

describe('Pruebas de Strings', () => {
  it('Debe de regresar un String', () => {
    const resp = mensaje('Fernando');

    expect(typeof resp).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Daniel'
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);
  });
});
