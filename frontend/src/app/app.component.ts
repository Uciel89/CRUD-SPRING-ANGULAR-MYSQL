import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router){}

  // Metodo para navegar hacia el componente listar
  Listar(){
    this.router.navigate(["listar"]);
  }

  // Metodo para navegar hacia el componente nuevo
  Nuevo(){
    this.router.navigate(["nuevo"]);
  }


}


