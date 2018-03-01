import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { FuncStartLevelPage } from '../func-start-level/func-start-level';

@Component({
  selector: 'page-func-start',
  templateUrl: 'func-start.html',
})
export class FuncStartPage {

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

  private tick: number = 120;

  yourName = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public vw: ViewController) {
    this.yourName = localStorage.getItem('yourName');
    let timer = TimerObservable.create(1000, 1000).subscribe(t => 
      { 
        if(this.tick == 0){
          alert('Ok start level 1.');
          navCtrl.push(FuncStartLevelPage);
          this.tick = -1;
          vw.dismiss();
        }
        if(this.tick > 0){
          this.tick = this.tick - 1; 
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuncStartPage');
  }

}
