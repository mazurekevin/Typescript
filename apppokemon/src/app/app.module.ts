import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pokemon1Component } from './pokemon1/pokemon1.component';
import { Pokemon2Component } from './pokemon2/pokemon2.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    Pokemon1Component,
    Pokemon2Component,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
