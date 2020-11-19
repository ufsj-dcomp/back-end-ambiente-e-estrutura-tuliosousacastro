import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from './consulta/consulta.component';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  getConsultas(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>("http://localhost:3000/consulta"); 
  }

  getConsulta(consultaId: number): Observable<Consulta>{
    return this.http.get<Consulta>("http://localhost:3000/consulta/" + consultaId); 
  }

  adicionar(consulta: Consulta): Observable<any>{
    return this.http.post("http://localhost:3000/consulta",consulta); 
  }

  editar(consulta: Consulta): Observable<any>{
    return this.http.put("http://localhost:3000/consulta/" + consulta.consultaid, consulta); 
  }

  remover(consulta: Consulta): Observable<any>{
    return this.http.delete("http://localhost:3000/consulta/" + consulta.consultaid); 
  }


}
