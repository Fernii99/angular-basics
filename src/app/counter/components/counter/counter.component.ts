import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter</h1>
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)"> +1 </button>
    <button (click)="reset()"> reset </button>
    <button (click)="decreaseBy(1)">-1</button>
  `
})

export class CounterComponent {

  public counter: number = 0;

  increaseBy = (value: number):void  =>{
    this.counter += value;
  }

  reset = (): void => {
    this.counter = 0;
  }

  decreaseBy = (value: number )=> {
    this.counter -= value
  }


  constructor() { }


}
