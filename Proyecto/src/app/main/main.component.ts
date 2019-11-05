import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})  
export class MainComponent {
  textoPadre: string;

  constructor() {

	}

	ngOnInit() {}

  ver(valor){
    console.log(valor);
  }
}
