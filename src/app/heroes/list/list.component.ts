import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  public heroNames: string[] =['Spiderman', 'Ironman','Hulk','She Hulk', 'Capitan America'];


public deletedHero?:string;


removeLastHero(): void {
 this.deletedHero = this.heroNames.pop();
 console.log( this.deletedHero);

 }




/*
removeLastHero(): void {
   // this.heroNames.shift(); //remueve el primero shift, agrega=push alimina el ultimo elemento push
const deletedHero = this.heroNames.pop();
  console.log( deletedHero);

  }

*/
}
