import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuarios/usuarios.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>("http://localhost:3000/user"); 
  }

  getUser(userId: number): Observable<Usuario>{
    return this.http.get<Usuario>("http://localhost:3000/user/" + userId); 
  }

  adicionarUser(usuario: Usuario): Observable<any>{
    return this.http.post("http://localhost:3000/user",usuario); 
  }

  editarUser(usuario: Usuario): Observable<any>{
    return this.http.put("http://localhost:3000/user/" + usuario.userid, usuario); 
  }

  removerUser(usuario: Usuario): Observable<any>{
    return this.http.delete("http://localhost:3000/user/" + usuario.userid); 
  }


}
