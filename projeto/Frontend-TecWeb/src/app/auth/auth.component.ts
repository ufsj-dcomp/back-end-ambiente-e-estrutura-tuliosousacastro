import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Globals } from '../globals/globals';

export class AuthResponse {
  token: string;
  usuario: Usuario;
  success: boolean;
}


export class Usuario{
  userid: number;
  username: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public username: string;
  public password: string; 
 
  public authInvalido: boolean;

  constructor(private authService: AuthService, private router: Router, private globals: Globals) { }

  ngOnInit(): void {
    this.authInvalido = false;
  }
  auth(){
    this.authService.auth(this.username, this.password).subscribe(response => {
      if(response.success === true){
        this.globals.loginData.token = response.token;
        this.globals.loginData.usuario = response.usuario;
        this.authInvalido = false;
        this.router.navigate(['/home']);
      } else {
        this.authInvalido = true;
      }
    }, err => {
      this.authInvalido = true;
    });
  }

  
}
