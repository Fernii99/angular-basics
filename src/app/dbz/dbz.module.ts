import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MainPageComponent} from './pages/main-page.component'
import { DbzListComponent } from './components/list/list.component';
import { AddComponent } from './components/add-character/add/add.component';



@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    AddComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
