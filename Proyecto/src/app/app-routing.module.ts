import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RecomendadosComponent } from './recomendados/recomendados.component';
import { MainComponent } from './main/main.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { DetallesComponent } from './detalles/detalles.component';


const routes: Routes = [
  { path: 'recomendados', component: RecomendadosComponent },
  { path: 'main', component: MainComponent },
  { path: 'hoteles/:HotelId', component: HotelesComponent },
  { path: 'detalles/:HotelId', component: DetallesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
