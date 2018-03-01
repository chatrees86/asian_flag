import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FuncStartPage } from '../func-start/func-start';

@Component({
  selector: 'page-func-regis',
  templateUrl: 'func-regis.html',
})
export class FuncRegisPage {

  yourName = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuncRegisPage');
  }

  goToStart(){

    if(this.yourName.trim() == ''){
      alert('Please input your name.');
      return;
    }

    if(this.yourName.length > 100){
      alert('Your name out of lenght.');
      return;
    }
    localStorage.setItem('yourName', this.yourName);
    this.navCtrl.push(FuncStartPage);
  }

}
