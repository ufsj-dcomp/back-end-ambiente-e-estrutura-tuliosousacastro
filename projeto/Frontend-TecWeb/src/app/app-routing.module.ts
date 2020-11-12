import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
{ path: 'consulta', component: ConsultaComponent },
{ path: 'usuarios', component: UsuariosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
