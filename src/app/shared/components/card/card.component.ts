import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receta } from 'src/app/features/recetas/interface/receta';
import { RecetasService } from 'src/app/features/recetas/services/recetas.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private _route: ActivatedRoute,
    private recetasService: RecetasService, private _router: Router) {
    console.log('se creó el componente')
  }
  
  @Input()
  recetita: Receta;
  
  @Output() borreLaReceta = new EventEmitter<any>()
  
  ngOnInit(){}


  MeGustas() {
    if (this.recetita.id) {
      this.recetasService.MeGustas(this.recetita.id);
    }
  }
  borrarReceta() {
    this.recetasService.deleteReceta(this.recetita.id).subscribe(
      () => this.borreLaReceta.emit(this.recetita.id)
    );
  }
  editarReceta() {
    //este fue gracias a brian!!
    this._router.navigate([`recetas/${this.recetita.id}/editar`])
    
    //return `${this.recetita.id}/editar`
  }
}

