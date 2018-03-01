import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FuncRegisPage } from '../func-regis/func-regis';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToRegis(){
    this.navCtrl.push(FuncRegisPage);
  }

}
