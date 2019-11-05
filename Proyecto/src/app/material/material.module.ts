import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

const MaterialComponents = [
  MatButtonModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatDialogModule,
  MatCardModule,
  MatInputModule,
  FormsModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {
  
}
