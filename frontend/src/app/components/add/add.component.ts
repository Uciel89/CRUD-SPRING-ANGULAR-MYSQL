import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona: Persona = new Persona();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createPersona(this.persona)
    .subscribe(data => {
      alert("Se agrego con exicto...!!");
      this.router.navigate(["listar"]);
    })
  }
}
