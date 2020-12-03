import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Globals } from './globals/globals';
import { Usuario } from './usuarios/usuarios.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private globals: Globals) { }

  getUsers(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>("http://localhost:3000/user",this.header()); 
  }

  getUser(userId: number): Observable<Usuario>{
    return this.http.get<Usuario>("http://localhost:3000/user/" + userId,this.header()); 
  }

  adicionarUser(usuario: Usuario): Observable<any>{
    return this.http.post("http://localhost:3000/user",usuario); 
  }

  editarUser(usuario: Usuario): Observable<any>{
    return this.http.put("http://localhost:3000/user/" + usuario.userid, usuario,this.header()); 
  }

  removerUser(usuario: Usuario): Observable<any>{
    return this.http.delete("http://localhost:3000/user/" + usuario.userid,this.header()); 
  }



  header(){
    return{
      headers: new HttpHeaders({'Content-type': 'application/json',
        'x-access-token': this.globals.loginData.token
      })
    };
   }

}
