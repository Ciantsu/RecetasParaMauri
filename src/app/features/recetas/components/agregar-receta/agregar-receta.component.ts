import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Receta } from '../../interface/receta';

import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-agregar-receta',
  templateUrl: './agregar-receta.component.html',
  styleUrls: ['./agregar-receta.component.css']
})
export class AgregarRecetaComponent {

  constructor(private recetasService: RecetasService) { }

  formulario: FormGroup

  ngOnInit() {
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      subtitulo: new FormControl(''),
      descripcion: new FormControl(''),
      fuenteDeImagen: new FormControl(''),
    });
  }


  get titulo() { return this.formulario.get('titulo') };
  get subtitulo() { return this.formulario.get('subtitulo') };
  get descripcion() { return this.formulario.get('descripcion') };
  get fuenteDeImagen() { return this.formulario.get('fuenteDeImagen') };

  async Guardar() {
    const nuevaReceta: Receta = {
      title: this.titulo?.value,
      subtitle: this.subtitulo?.value,
      description: this.descripcion?.value,
      imageSource: this.fuenteDeImagen?.value,
      meGusta: false,
    };
    
    // this.recetasService.addReceta(nuevaReceta).subscribe(
    //   {
    //     complete: () => console.log("ok"),
    //     error: (err) => console.log(err)
    //   }
    // )
   
    // const response = await this.recetasService.addReceta(nuevaReceta).toPromise() 
    // console.log(response);

    this.recetasService.addReceta(nuevaReceta).toPromise().then((x) => console.log(x));
    console.log("asdgafdgsad"); 
  }

}