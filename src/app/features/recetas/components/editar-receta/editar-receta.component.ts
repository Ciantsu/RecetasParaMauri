import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Receta } from '../../interface/receta';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.component.html',
  styleUrls: ['./editar-receta.component.css']
})
export class EditarRecetaComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private recetasService: RecetasService,
    private fb: FormBuilder) {
    console.log('se creó el componente')
  }
    formulario = new FormGroup({
      titulo: new FormControl(''),
      subtitulo: new FormControl(''),
      descripcion: new FormControl(''),
      fuenteDeImagen: new FormControl(''),         
    });
  
  public id: any;
  public recetardusca: any

  ngOnInit() {
    
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];

      console.log(this.id);

    });
    // (x: Receta) => (this.recetota = x)
    //maybe use recetota as an observable???  ${this.recetota.title}

    
    this.sincronizar() 
  }
 
  setearFormulario() {
    this.formulario.setValue({titulo:`${this.recetardusca.title}`, 
    subtitulo:`${this.recetardusca.subtitle}`,
    descripcion:`${this.recetardusca.description}`,
    fuenteDeImagen:`${this.recetardusca.imageSource}` })
  }

  get titulo() { return this.formulario.get('titulo') };
  get subtitulo() { return this.formulario.get('subtitulo') };
  get descripcion() { return this.formulario.get('descripcion') };
  get fuenteDeImagen() { return this.formulario.get('fuenteDeImagen') };

  async sincronizar(): Promise<any> {
  const recetota = await this.recetasService.getReceta(this.id).toPromise()
  this.recetardusca = recetota;
  this.setearFormulario();
}
  
  async Guardar() {
    const recetaParaEditar: Receta = {
      title: this.titulo?.getRawValue(),
      subtitle: this.subtitulo?.getRawValue(),
      description: this.descripcion?.getRawValue(),
      imageSource: this.fuenteDeImagen?.getRawValue(),
      meGusta: false,
    };

    this.recetasService.updateReceta(this.id, recetaParaEditar).toPromise().then((x) => console.log(x));
    // console.log(this.formulario.controls.titulo.value); 
  }





  //bueno la receta existe, está acá just gotta figure out
 //how to assign those values to the input fields
  consolear() {  this.setearFormulario()}
}
