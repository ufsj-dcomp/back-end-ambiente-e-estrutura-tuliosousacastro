import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ConsultaComponent, MngConsultaDialog } from './consulta/consulta.component';
import { MngUsuarioDialog, UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
  
@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    UsuariosComponent,
    MngConsultaDialog,
    MngUsuarioDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [
    MngConsultaDialog, 
    MngUsuarioDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
