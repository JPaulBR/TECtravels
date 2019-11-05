import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  DetallesComponent} from './detalles.component';


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [DetallesComponent],
  exports: [DetallesComponent],
  bootstrap: [DetallesComponent]
})
export class CarouselMModule { }
