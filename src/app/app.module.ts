import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './shared/components/card/card.component';
import { DetalleDeRecetaComponent } from './features/recetas/components/detalle-de-receta/detalle-de-receta.component';
import { AgregarRecetaComponent } from './features/recetas/components/agregar-receta/agregar-receta.component';
import { ListaDeRecetaComponent } from './features/recetas/components/lista-de-receta/lista-de-receta.component';
import { HogarComponent } from './features/hogar/hogar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './shared/components/form/form.component';
import { EditarRecetaComponent } from './features/recetas/components/editar-receta/editar-receta.component';
import { MaterialModule } from './shared/modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DetalleDeRecetaComponent,
    AgregarRecetaComponent,
    ListaDeRecetaComponent,
    EditarRecetaComponent,
    HogarComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
