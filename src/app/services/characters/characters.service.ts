import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IModelCharacter } from '../../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private _http: HttpClient
  ) { }

  // https://dragonball-api.com/api/characters
  public getCharacters(): Observable<IModelCharacter[]> {
    return this._http.get(`https://dragonball-api.com/api/characters`)
    .pipe(
      map((res: any) => res.items)
    );
  }
}
