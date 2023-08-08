import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})


export class AppComponent {
  //hay que ponerle public
  //title = 'Hola Mundo';

  public title = 'Hola Mundo';
  //public counter: number = 10;

/*
  increaseBy():void{
    //this.counter = this.counter +1;
    this.counter +=1;
  }
*/

/*
  decrementBy():void{
    this.counter -=1;
  }
  */



  /*
//lo pasamos a la clase counter.component.ts
  increaseBy(value:number):void{
  this.counter += value;
  }

  reset(counter:number):void {
    this.counter=10;
  }

  */

}
