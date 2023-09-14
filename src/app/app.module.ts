import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeccionComponent } from './seccion/seccion.component';
import { EnlaceComponent } from './enlace/enlace.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { NoticiaComponent } from './noticia/noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionComponent,
    EnlaceComponent,
    ArticuloComponent,
    NoticiaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
