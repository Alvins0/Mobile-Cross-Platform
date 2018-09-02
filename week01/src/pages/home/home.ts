import { Component, enableProdMode } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private titleHandler:Title) {
    
  }
  clicked(){
    enableProdMode();
    console.log("Button clicked");
    this.titleHandler.setTitle("Home Page");
  }
}
