import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecomendadosComponent } from './recomendados/recomendados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './main/main.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { DetallesComponent } from './detalles/detalles.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VentanaModalComponent } from './ventana-modal/ventana-modal.component';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    RecomendadosComponent,
    MainComponent,
    HotelesComponent,
    DetallesComponent,
    VentanaModalComponent
    //ListaHotelesComponent
  ],
  entryComponents:[VentanaModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCt2J7vkihxFkTGIvKeds1eUzptymCRjPo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
