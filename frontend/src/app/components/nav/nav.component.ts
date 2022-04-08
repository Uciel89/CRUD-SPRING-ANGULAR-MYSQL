import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLogged = false;

  constructor( private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    // Lo utilizamos para mostrar cosas cuando si o si, el ususuario esta logeado
    if(this.tokenService.getToken()){
      this.isLogged = true; 
    } else {
      this.isLogged = false; 
    }
  }

  // Metodo para navegar hacia el componente listar
  Listar(){
    this.router.navigate(["listar"]);
  }

  // Metodo para navegar hacia el componente nuevo
  Nuevo(){
    this.router.navigate(["nuevo"]);
  }

  Login(){
    this.router.navigate(["login"]);
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }


}
