import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Publicacion } from '../interfaces/publicacion.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url: string = 'https://663ff939e3a7c3218a4e60e9.mockapi.io/blog/v1';
  private http = inject(HttpClient);


  obtenerPosts(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(`${this.url}/dataBlog`)
  }


}
