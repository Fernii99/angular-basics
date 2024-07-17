import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },{
      id: uuid(),
      name: 'Vegetta',
      power: 7500
    },{
      id: uuid(),
      name: 'Freezer',
      power: 10500
    },{
      id: uuid(),
      name: 'Gohan',
      power: 8000
    }
];

// When the html component calls the onDeleteId, will trigger this function that with the $event we know it will receive
// some values, of the type number
// and will delete the character data on the position
deleteCharacterById(id: string): void{
  this.characters = this.characters.filter( character => character.id !== id);
}


addCharacter(character: Character): void {

  const newCharacter: Character = {id: uuid(), ...character};

  this.characters.push(character)
}



}
