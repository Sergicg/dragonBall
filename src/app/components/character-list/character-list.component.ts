import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters/characters.service';
import { IModelCharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'character-list',
  standalone: true,
  imports: [],
  providers: [
    CharactersService
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {

  vIsLoaded: boolean = false;
  lst_Characters: IModelCharacter[] = [];

  constructor(
    private _appCharacterService: CharactersService
  ) {}

  ngOnInit(): void {
      this._appCharacterService.getCharacters().subscribe({
        next: (value: IModelCharacter[]) => {
          console.log(value);
          this.lst_Characters = value;
        },
        error: (err: unknown) => {
          console.log(err);          
        },
        complete: () => {
          console.log('complete');
          this.vIsLoaded = true;
        }
      })
  }

}
