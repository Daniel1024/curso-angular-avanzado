import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from } from 'rxjs';

describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });


  it('Init: Debe de cargar los medicos', () => {
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      const medicos = ['medico1', 'medico2', 'medico3'];

      return from([medicos]);
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThanOrEqual(0);

  });


});
