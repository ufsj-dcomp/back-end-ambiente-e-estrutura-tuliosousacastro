import { Component, Inject, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
export class Usuario {
  userid = 1;
  username: string;
  password: string;
  status = "ativo";
}

const USUARIO: Usuario[]=[
  {userid: 1, username: 'hp', password: 'gt2', status: 'impressora'},
  {userid: 2, username: 'hp2', password: '3gt2', status: 'nimpressora'}
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  displayedUserColumns: string[] =['userid','username', 'password', 'status','acoes'];
  dataSource = new MatTableDataSource<Usuario>();

  constructor(private service: UsuarioService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(usuario => this.dataSource.data = usuario);
  }

  openNewUserDialog(): void{
    const dialogRef = this.dialog.open(MngUsuarioDialog, {
      width: '750px',
      data: new Usuario()
    });

    dialogRef.afterClosed().subscribe(usuario => {
      this.service.adicionarUser(usuario).subscribe(_ => {
        this.service.getUser(usuario.username).subscribe(newUsuario => {
          this.dataSource.data = this.dataSource.data.concat(newUsuario);

        });
      });
    })
  }

  openEditUserDialog(usuario: Usuario): void{
    const dialogRef = this.dialog.open(MngUsuarioDialog, {
      width: '750px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe(usuario => {
      this.service.editarUser(usuario).subscribe(_ => {
        this.dataSource.data = this.dataSource.data.map(oldUsuario =>{
          if (oldUsuario.userid == usuario.userid) return usuario;
        })
      });
    })
  }

  excluirUser(usuario: Usuario): void{
    this.service.removerUser(usuario).subscribe(_ =>{
      this.dataSource.data = this.dataSource.data.filter(oldUsuario => oldUsuario.userid != usuario.userid);

    })
  }

}

@Component({
  selector: 'dialog-mng-usuario',
  templateUrl: 'dialog-mng-usuario.html'
})
export class MngUsuarioDialog {


  constructor(public dialogRef: MatDialogRef<MngUsuarioDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario){}

  onNoClick(): void{
    this.dialogRef.close();
  }


}
