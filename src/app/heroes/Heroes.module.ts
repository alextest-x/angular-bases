
import { NgModule } from "@angular/core";
import { HeroComponent } from './hero/hero.component';
//import { ListComponent } from "./list/list.component";

@NgModule({
 //importa las clases
 declarations: [
  HeroComponent,
 // ListComponent,
],

//importa los modulos
exports: [
  HeroComponent,
 // ListComponent,
]

})
export class HeroesModule { }
