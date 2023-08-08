import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/Heroes.module';

//import { CounterComponent } from './counter/counter.component';
//import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';


@NgModule({
  //importa las clases
  declarations: [
    AppComponent,
    //CounterComponent,
    //HeroComponent,
    ListComponent
  ],

  //importa los modulos para registrar los nuevos modulos
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
