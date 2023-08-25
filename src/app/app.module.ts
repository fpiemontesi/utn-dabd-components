import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { MarcaComponent } from './marca/marca.component';
import { PiezaComponent } from './pieza/pieza.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    MarcaComponent,
    PiezaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
