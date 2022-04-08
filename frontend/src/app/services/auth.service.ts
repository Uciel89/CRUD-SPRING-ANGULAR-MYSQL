import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:8080/auth/";

  constructor(private httpClient: HttpClient ) { }

  // Método para un nuevo usuario
  public nuevoUsuario(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authUrl + 'nuevoUsuario', nuevoUsuario)
  }
  
  // Método para iniciar sesion
  public login(login: LoginUsuario ): Observable<JwtDTO> {
    return this.httpClient.post<any>(this.authUrl + 'login', login)
  }
}
