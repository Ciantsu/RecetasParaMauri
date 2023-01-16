import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { catchError, map, retry } from 'rxjs/operators';
import { Receta } from '../interface/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  apiUrl = "https://localhost:7189/api/Recetas";
  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('oh no:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('bardeaste; volvé después.'));
  }

  getRecetas(): Observable<Receta[]> {
    return this.http.get<Receta[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }//acá el errorcatcher funciona, es cuando le agrego paryhámetros que rompe
  getReceta(id: number): Observable<Receta> {
    const ruta = `${this.apiUrl}/${id}`;
    return this.http.get<Receta>(ruta);
  }
  
  addReceta(receta: Receta): Observable<Receta> {
    return this.http.post<Receta>(this.apiUrl, receta)
  }

  deleteReceta(id: number) {
    const ruta = `${this.apiUrl}/${id}`;
    return this.http.delete<Receta>(ruta);
  }

  //ya sé quel any no va :^[
  updateReceta(id: number, body: Receta): Observable<any> {
    const ruta = `${this.apiUrl}/${id}`;
    return this.http.put(ruta, body)
    //  this.http.get<Receta>(ruta)
  }
  
  
  recetario: Receta[] = []
  
  MeGustas(id: number) {
    let receta = this.recetario.find(x => x.id == id)
    if (receta) receta.meGusta = !receta.meGusta
  }
}