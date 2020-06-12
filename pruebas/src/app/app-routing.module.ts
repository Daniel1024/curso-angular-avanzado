import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RUTAS } from './avanzado/rutas/app.routes';


// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(RUTAS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
