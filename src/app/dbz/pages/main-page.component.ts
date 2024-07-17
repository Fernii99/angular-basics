import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',

})

export class MainPageComponent  {

  // Generate a conetion between the service and the main page, so we can still use the methods of the service
  // Generating the Private connection makes the case that the methods are not accessible from everywhere,
  //! it will generate an error on the main-page.component.html saying that the methods are not accessible
  //! so in order to fix that, we will see it underneath
  constructor( private dbzService: DbzService){}


//! To fix the problem of not accessible methods and there may be more than 100 methods to do different things
//! and we don't need all of them in this case
// so to fix this problem, we will generate a get function that will retrieve the characters from the dbzService.characters,
//the array of charaters we have in the service
  get characters(): Character[] {
    return [ ...this.dbzService.characters ];
  }

// For the Delete and Create  Characters it will be as simple as generating
// a function that calls the needed method from the service
  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  addNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

}
