import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';
import { Receta } from '../../interface/receta';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-de-receta',
  templateUrl: './lista-de-receta.component.html',
  styleUrls: ['./lista-de-receta.component.css']
})
export class ListaDeRecetaComponent implements OnInit {
  constructor(private recetasService: RecetasService,
    private _route: ActivatedRoute,) { }

  selectedId: any
  recetas$: Observable<Receta[]>;
  recetario: Receta[] = []

  ngOnInit(): void {
    this.recetasService.getRecetas().subscribe((response: Receta[]) => {
      this.recetario = response;
    })

    this.recetas$ = this._route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = String(params.get('id'));
        return this.recetasService.getRecetas();
      })
    );
  }
  borrarRecetaFront(idRecibida: any) {
    const recetaABorrar = this.recetario.find(x => x.id == idRecibida)
    if (recetaABorrar) {
      const indicador = this.recetario.indexOf(recetaABorrar)
      this.recetario.splice(indicador, 1)
    }
  };
}
