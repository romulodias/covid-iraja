import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  paisesCovidUrl = 'https://corona.lmao.ninja/v2/countries'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.paisesCovidUrl}`);
  }
}
