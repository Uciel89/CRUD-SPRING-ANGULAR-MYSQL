import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';

/*==/ Importamos el servicio /==*/
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPersona()
    .subscribe(data => {
      this.personas = data;
    })
  }

  // Metodo para editar

  Editar(persona:Persona):void{
    // Enviamos el id del registro que precionamos en nuestra tabla
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["editar"]);
  }

  // Método para eliminar
  Eliminar(persona: Persona){
    this.service.deletePersona(persona)
    .subscribe(data => {

      // Filtramos y eliminamos el registro seleccionado
      this.personas = this.personas.filter(p => p !== persona);
      alert("Usuario eliminad...");
    })
  }

}
