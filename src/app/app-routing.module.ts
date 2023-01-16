import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { HogarComponent } from './features/hogar/hogar.component';
import { AgregarRecetaComponent } from './features/recetas/components/agregar-receta/agregar-receta.component';
import { DetalleDeRecetaComponent } from './features/recetas/components/detalle-de-receta/detalle-de-receta.component';
import { EditarRecetaComponent } from './features/recetas/components/editar-receta/editar-receta.component';
import { ListaDeRecetaComponent } from './features/recetas/components/lista-de-receta/lista-de-receta.component';

const routes: Routes = [
  {
    path: '', component: HogarComponent,
    title: 'Principal',
    pathMatch: 'full',
  },

  {
    path: 'recetas',
    component: ListaDeRecetaComponent,
    title: 'Recetas',
  },
  {
    path: 'recetas/agregar', component: AgregarRecetaComponent
  },
  {
    path: "recetas/:id", component: DetalleDeRecetaComponent,
  },
  {
    path: "recetas/:id/editar", component: EditarRecetaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

