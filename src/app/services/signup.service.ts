import { Mensagem } from './../models/mensagem';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000/stefanini/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private HttpClient: HttpClient) { }

  incluir(usuario: any): Observable<Mensagem> {
    return this.HttpClient.post<Mensagem>(URL, usuario);
  }
}
