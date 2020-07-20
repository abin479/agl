import { PetOwner } from './../../../shared/models/pet.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  readonly API_URL = 'http://agl-developer-test.azurewebsites.net';

  constructor(private httpClient: HttpClient) { }

  public getPetDetails(): Observable<PetOwner[]> {

    return this.httpClient.get<PetOwner[]>(`${this.API_URL}/people.json`);
  }
}
