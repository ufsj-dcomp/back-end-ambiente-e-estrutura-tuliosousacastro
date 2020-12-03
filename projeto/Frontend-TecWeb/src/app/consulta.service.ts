import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from './consulta/consulta.component';
import { Globals } from './globals/globals';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient, private globals: Globals) { }

  getConsultas(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>("http://localhost:3000/consulta",this.header()); 
  }

  getConsulta(consultaId: number): Observable<Consulta>{
    return this.http.get<Consulta>("http://localhost:3000/consulta/" + consultaId,this.header()); 
  }

  adicionar(consulta: Consulta): Observable<any>{
    return this.http.post("http://localhost:3000/consulta",consulta,this.header()); 
  }

  editar(consulta: Consulta): Observable<any>{
    return this.http.put("http://localhost:3000/consulta/" + consulta.consultaid, consulta,this.header()); 
  }

  remover(consulta: Consulta): Observable<any>{
    return this.http.delete("http://localhost:3000/consulta/" + consulta.consultaid,this.header()); 
  }


  header(){
    return{
      headers: new HttpHeaders({'Content-type': 'application/json',
        'x-access-token': this.globals.loginData.token
      })
    };
   }

}
