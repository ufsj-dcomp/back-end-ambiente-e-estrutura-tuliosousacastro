import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ConsultaComponent } from './consulta/consulta.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
{ path: '', component: AuthComponent            },
{path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'consulta', component: ConsultaComponent },
      { path: 'usuarios', component: UsuariosComponent}
    ]
},
{path: 'auth', component: AuthComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
