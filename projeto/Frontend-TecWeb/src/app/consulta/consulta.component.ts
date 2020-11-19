import { Component, Inject, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
export class Consulta {
  consultaid: number;
  consultausername: string;
  categoria: string;
  titulo = "titulop";
  descricao = "descricaop";
}

const CONSULTA: Consulta[]=[
  {consultaid: 1, consultausername: 'hp', categoria: 'gt2', titulo: 'impressora', descricao: 'ta pronto'},
  {consultaid: 2, consultausername: 'hp2', categoria: '3gt2', titulo: 'nimpressora', descricao: 'n ta pronto'}
];


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  displayedColumns: string[] =['consultaid','consultausername', 'categoria', 'titulo','descricao','acoes'];
  dataSource = new MatTableDataSource<Consulta>();

  constructor(private service: ConsultaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getConsultas().subscribe(consulta => this.dataSource.data = consulta);
  }

  openNewDialog(): void{
    const dialogRef = this.dialog.open(MngConsultaDialog, {
      width: '750px',
      data: new Consulta()
    });

    dialogRef.afterClosed().subscribe(consulta => {
      this.service.adicionar(consulta).subscribe(consultaId => {
        this.service.getConsulta(consultaId).subscribe(newConsulta => {
          this.dataSource.data = this.dataSource.data.concat(newConsulta);

        });
      });
    })
  }

  openEditDialog(consulta: Consulta): void{
    const dialogRef = this.dialog.open(MngConsultaDialog, {
      width: '750px',
      data: consulta
    });

    dialogRef.afterClosed().subscribe(consulta => {
      this.service.editar(consulta).subscribe(_ => {
        this.dataSource.data = this.dataSource.data.map(oldConsulta =>{
          if (oldConsulta.consultaid == consulta.consultaid) return consulta;
        })
      });
    })
  }

  excluir(consulta: Consulta): void{
    this.service.remover(consulta).subscribe(_ =>{
      this.dataSource.data = this.dataSource.data.filter(oldConsulta => oldConsulta.consultaid != consulta.consultaid);

    })
  }

}

@Component({
  selector: 'dialog-mng-consulta',
  templateUrl: 'dialog-mng-consulta.html'
})
export class MngConsultaDialog {


  constructor(public dialogRef: MatDialogRef<MngConsultaDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Consulta){}

  onNoClick(): void{
    this.dialogRef.close();
  }

}