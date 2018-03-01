import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { FuncStartSummaryPage } from '../func-start-summary/func-start-summary';

@Component({
  selector: 'page-func-start-level',
  templateUrl: 'func-start-level.html',
})
export class FuncStartLevelPage {

  score = 0;

  asiaInfo = [
    {
      countryName: "Asian",
      fullName: "East Asian Community (EAC)",
      flag: "asian_flag.png"
    },
    {
      countryName: "Brunei",
      fullName: "Negara Brunei Darussalam",
      flag: "Flag_of_Brunei.svg.png"
    },
    {
      countryName: "Cambodia",
      fullName: "ព្រះរាជាណាចក្រកម្ពុជា",
      flag: "Flag_of_Cambodia.svg.png"
    },
    {
      countryName: "Indonesia",
      fullName: "Republic of Indonesia",
      flag: "Flag_of_Indonesia.svg.png"
    },
    {
      countryName: "Laos",
      fullName: "ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ",
      flag: "Flag_of_Laos.svg.png"
    },
    {
      countryName: "Malaysia",
      fullName: "Malaysia مليسيا",
      flag: "Flag_of_Malaysia.svg.png"
    },
    {
      countryName: "Myanmar",
      fullName: "ပြည်ထောင်စု သမ္မတ မြန်မာနိုင်ငံတော်",
      flag: "Flag_of_Myanmar.svg.png"
    },
    {
      countryName: "Singapore",
      fullName: "Republic of Singapore",
      flag: "Flag_of_Singapore.svg.png"
    },
    {
      countryName: "Thailand",
      fullName: "Thailand",
      flag: "Flag_of_Thailand.svg.png"
    },
    {
      countryName: "Philippines",
      fullName: "Republika ng Pilipinas",
      flag: "Flag_of_the_Philippines.svg.png"
    },
    {
      countryName: "Vietnam",
      fullName: "Cộng hòa xã hội chủ nghĩa Việt Nam",
      flag: "Flag_of_Vietnam.svg.png"
    }
  ];



  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public vw: ViewController) {
    //alert(this.randomise(1, 10));
    this.rndChoice();
  }

  choice = [-1,-1,-1,-1];
  
  choiceItem = [];

  question = "";

  answer = -1;

  rndChoice(){

    this.choiceItem = [];
    
    this.choice = [-1,-1,-1,-1];

    this.answer = -1;

    for(var i=0;i<4;i++){
      this.choice[i] = this.randomise(0, 11);
      this.choiceItem.push(
        {
          countryName: this.asiaInfo[this.choice[i]].countryName,
          fullName: this.asiaInfo[this.choice[i]].fullName,
          flag: this.asiaInfo[this.choice[i]].flag,
          id: this.choice[i]
        }
      )
    }
    console.log(this.choice);
    this.answer = this.choice[Math.floor(Math.random() * this.choice.length)];
    this.question = "Flag of " + this.asiaInfo[this.answer].countryName;
    //var postmessage = "hi my favorite site is " + answer;
    //console.log(postmessage);
  }

  randomise(min, max) {
      var checkRnd = true;
      var tmp = -1;
      while(checkRnd){
        tmp = Math.floor(Math.random() * (max - min)) + min;
        if(this.choice.indexOf(tmp) >= 0){
          checkRnd = true; 
        }else{
          checkRnd = false; 
          return tmp;
        }
      }
      return -1;
  }

  confirm;
  selectCheck = -1;

  submitQuestion(){
    if(this.selectCheck != -1){
      this.confirm = this.alertCtrl.create({
      title: 'Confirm submit',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            this.checkAnswer();
          }
        }
      ]
    });
    this.confirm.present();
    }else{
      alert('Please select choice.');
    }
  }

  _id = -1;
  selectAnswer(index, idd){
    this.selectCheck = index;
    this._id = idd;
  }

  answerNumber = 1;

  checkAnswer(){
    if(this.answer == this._id){
      this.score = this.score + 1;
      alert('Very Good !!!!');
      this.rndChoice();
    }else{
      this.score = this.score - 1;
      alert('Answer in incorrect.');
    }
    this.answerNumber = this.answerNumber + 1;
    if(this.answerNumber == 11){
      this.navCtrl.push(FuncStartSummaryPage, {
        score: this.score
      });
      this.vw.dismiss();
    }
    this.selectCheck = -1;
  }

}
