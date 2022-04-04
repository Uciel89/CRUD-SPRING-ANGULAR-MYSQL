import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona: Persona = new Persona();
  constructor(private router: Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    
    // Recivimos el id que enviamos desde la otra pantalla
    let id = localStorage.getItem("id");

    this.service.getOnePersona(+id!!)
    .subscribe(data => {
      this.persona = data; 
    })
  }

  Actualizar(persona:Persona){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
