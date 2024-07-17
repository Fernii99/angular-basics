import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class DbzListComponent {


  // The imput decorator means that is going to be something receiving from the parent component
  // in this case there is going to be a character list
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];



//Todo: ADD COMMENTS TO REMEMBER

  //Generate an @Output decorator with the onDeleteId name that is going to be type of EventEmmiter sending a number type value
  // EventEmitter<number>
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();


  // When the X button is pressed  the onDeleteCharacter function is called and the function itself
  // will call the onDeleteId Emitter to the component listening to it, in this case main-page.component.html

  onDeleteCharacter(id?: string):void {
    if(!id) return;

  //Todo: Emitir el ID del Personaje
   this.onDeleteId.emit(id);
  }

 }
