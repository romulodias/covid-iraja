import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisesListagemComponent } from './paises-listagem/paises-listagem.component';
import { PaisesService } from './paises.service';


@NgModule({
  declarations: [
    AppComponent,
    PaisesListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
