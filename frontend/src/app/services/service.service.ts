import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  /* Realizamos la conexion entre en FrontEnd y el BackEnd */
  constructor(private http:HttpClient) { }

  // Definimos una URL, que es la encargada de hacer referencia a nuestro proyecto BackEnd
  url = 'http://localhost:8080/personas';

  // Metodos para obtener los datos del backend, conectada a la BD
  getPersona(){
    return this.http.get<Persona[]>(this.url);
  }

  // Método para obtener una persona por id
  getOnePersona(id:number){
    return this.http.get<Persona>(this.url + "/" + id);
  }

  // Metodo para cargar personas dentro de la tabla
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.url, persona);
  }

  // Método para actualizar una persona en la tabla personas
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.url + "/" + persona.id, persona);
  }

  // Método para eliminar 
  deletePersona(persona: Persona){
    return this.http.delete<Persona>(this.url + "/" + persona.id)
  }
}
