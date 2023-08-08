
//se genera el componente con el snipper 16
//con a- Component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  //templateUrl: 'name.component.html'
  //cambiamos este template para utilizarlo como html
  //template: '<h1>Hola counter</h1>'

   template:`
   <h1> Counter: {{counter}} </h1>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset(counter)">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `

})

export class CounterComponent  {
  public counter: number = 10;

  increaseBy(value:number):void{
    this.counter += value;
    }

    reset(counter:number):void {
      this.counter=10;
  }

}




/*
import { Component  } from '@angular/core';

@Component({
 selector: 'app-counter',
 template: '<h1>Hola counter</h1>',
})

export class CounterComponent{
}
*/
