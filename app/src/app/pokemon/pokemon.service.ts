import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService {
  host = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  find(name: string) {
    return this.http.get(`${this.host}/pokemon/${name}`);
  }

  all(page: number): Observable<string[]> {
    return this.http.get(`${this.host}/pokemon/all/${page}`) as Observable<
      string[]
    >;
  }
}
