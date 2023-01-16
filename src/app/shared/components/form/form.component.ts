import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Receta } from 'src/app/features/recetas/interface/receta';
import { RecetasService } from 'src/app/features/recetas/services/recetas.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private recetasService: RecetasService, private route: ActivatedRoute) {
    console.log('se inyectó el servicio');
  }
  
  identificador: any
  
  formulario: FormGroup
  
  ngOnInit() {
    this.formulario = new FormGroup({
      title: new FormControl(''),
      subtitle: new FormControl(''),
      description: new FormControl(''),
      imageSource: new FormControl(''),
    });
    this.identificador = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
    })
  }
  
  @Input()
  funcion: Function
  @Input()
  receta: Receta
  
  ngOnDestroy() {
    this.identificador.unsubscribe();
  }

  get title() { return this.formulario.get('title') };
  get subtitle() { return this.formulario.get('subtitle') };
  get description() { return this.formulario.get('description') };
  get imageSource() { return this.formulario.get('imageSource') };
  
  Guardar() {
    const nuevaReceta: Receta = {
      title: this.title?.value,
      subtitle: this.subtitle?.value,
      description: this.description?.value,
      imageSource: this.imageSource?.value,
      meGusta: false,
    };
    this.recetasService.addReceta(nuevaReceta);
  }
  
  // recetaAEditar = this.recetasService.getReceta(this.identificador.params)
  // t = recetaAEditar.title;
  // s = recetaAEditar.subtitle;
  // i = recetaAEditar.imageSource;
  // d = recetaAEditar.description;
}


