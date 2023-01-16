import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Receta } from '../../interface/receta';

@Component({
  selector: 'app-detalle-de-receta',
  templateUrl: './detalle-de-receta.component.html',
  styleUrls: ['./detalle-de-receta.component.css']
})


export class DetalleDeRecetaComponent implements OnInit {
  public id: any;
  public recetota: Receta

  constructor(    private _route:ActivatedRoute,
    private _router:Router,
    private recetasService: RecetasService) {
    console.log('se creó el componente')
  }

  ngOnInit() {
    this._route.params.subscribe((params:Params) =>{
      this.id = params['id'];
      
        console.log(this.id);

    });

    this.recetasService.getReceta(this.id).subscribe(
      (x: Receta) => (this.recetota = x)
    )
   
  }
consoleLogear() {
  console.log(this.recetota)
}
}
