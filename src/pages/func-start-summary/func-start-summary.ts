import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-func-start-summary',
  templateUrl: 'func-start-summary.html',
})
export class FuncStartSummaryPage {

  score = 0;
  scoreDes = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score = navParams.get("score");
    if(this.score > 5){
      this.scoreDes = "Very Good.";
    }else{
      this.scoreDes = "Oh Very bad.";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuncStartSummaryPage');
  }

}
