import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";


// While Creating this Module an error appeared, all the buttons/logic/functionality of the project was not working
// this happened because the *ngFor - *ngIf - *ngIfElse are part of a Angular Common module and  it was not being used
// to fix this problem the only needed thing was to import CommonModule that is part of Angular/common
// that makes the *ngIf and all this logics works
@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]
})

export class HeroesModule {

}
