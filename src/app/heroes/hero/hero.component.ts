import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number  = 45;

  //creando getters y setters
  //enviando a la vista por interpolacion
  get capitalzedName(): string{
    //return 'Hola Mundo'.toUpperCase();
    return this.name.toUpperCase();

}

getHeroeDescripcion(): string{
  return `${ this.name } - ${ this.age}`;
}


changeHero(value: string): void{
  /*
  //TODO=indica que flata de hacer
  throw 'Metodo no implemntado'
  */
  this.name="Spiderman";
}


changeAge(value: number): void{
    this.age = 25;
}


resetForm(): void{
  this.name= 'ironman';
  this.age = 45;
}



/*
public str = String(this.age);
  //public str1 = (typeof str);

  borrar(): void{
   this.name='';
   this.str= '';
   console.log(this.str);
   console.log(typeof this.str);

}
*/



}


