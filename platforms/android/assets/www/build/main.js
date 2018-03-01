webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p> Application build by Ionic framework version 3\n    , Test and develop for learning ionic framework.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on email</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      chatreese87@gmail.com\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__func_regis_func_regis__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToRegis = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__func_regis_func_regis__["a" /* FuncRegisPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tutorial-page" padding>\n  <ion-slides pager>\n    <ion-slide>\n      <ion-toolbar>\n        Asian Learning Flag\n      </ion-toolbar>\n      <img src="assets/images/asian_flag.png">\n      <h2 class="slide-title">Ready for Learning ?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="goToRegis()">\n        Let\'s Go\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncRegisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__func_start_func_start__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuncRegisPage = (function () {
    function FuncRegisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.yourName = "";
    }
    FuncRegisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FuncRegisPage');
    };
    FuncRegisPage.prototype.goToStart = function () {
        if (this.yourName.trim() == '') {
            alert('Please input your name.');
            return;
        }
        if (this.yourName.length > 100) {
            alert('Your name out of lenght.');
            return;
        }
        localStorage.setItem('yourName', this.yourName);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__func_start_func_start__["a" /* FuncStartPage */]);
    };
    return FuncRegisPage;
}());
FuncRegisPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-func-regis',template:/*ion-inline-start:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/func-regis/func-regis.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-list>\n\n  <ion-item>\n    <ion-label>Your Name</ion-label>\n    <ion-input type="text" [(ngModel)]="yourName"></ion-input>\n  </ion-item>\n\n</ion-list>\n\n  <div padding>\n    <button ion-button full large color="primary" block (click)="goToStart()">Start</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/func-regis/func-regis.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], FuncRegisPage);

//# sourceMappingURL=func-regis.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncStartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__func_start_level_func_start_level__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuncStartPage = (function () {
    function FuncStartPage(navCtrl, navParams, vw) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vw = vw;
        this.asiaInfo = [
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
        this.tick = 120;
        this.yourName = '';
        this.yourName = localStorage.getItem('yourName');
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["TimerObservable"].create(1000, 1000).subscribe(function (t) {
            if (_this.tick == 0) {
                alert('Ok start level 1.');
                navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__func_start_level_func_start_level__["a" /* FuncStartLevelPage */]);
                _this.tick = -1;
                vw.dismiss();
            }
            if (_this.tick > 0) {
                _this.tick = _this.tick - 1;
            }
        });
    }
    FuncStartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FuncStartPage');
    };
    return FuncStartPage;
}());
FuncStartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-func-start',template:/*ion-inline-start:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/func-start/func-start.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Leaning Start</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n  \n  <ion-card-header>\n    Welcome : {{ yourName }}\n  </ion-card-header>\n\n  <ion-card-content>\n    Countdown Leaning <font size="8">{{ tick }}</font> seconds\n  </ion-card-content>\n\n</ion-card>\n<ion-list>\n  <ion-item *ngFor="let item of asiaInfo">\n    <ion-thumbnail item-start>\n      <img src="assets/images/{{ item.flag }}">\n    </ion-thumbnail>\n    <h4>{{ item.countryName }}</h4>\n    <p>{{ item.fullName }}</p>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/func-start/func-start.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
], FuncStartPage);

//# sourceMappingURL=func-start.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncStartLevelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__func_start_summary_func_start_summary__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuncStartLevelPage = (function () {
    function FuncStartLevelPage(navCtrl, navParams, alertCtrl, vw) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.vw = vw;
        this.score = 0;
        this.asiaInfo = [
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
        this.choice = [-1, -1, -1, -1];
        this.choiceItem = [];
        this.question = "";
        this.answer = -1;
        this.selectCheck = -1;
        this._id = -1;
        this.answerNumber = 1;
        //alert(this.randomise(1, 10));
        this.rndChoice();
    }
    FuncStartLevelPage.prototype.rndChoice = function () {
        this.choiceItem = [];
        this.choice = [-1, -1, -1, -1];
        this.answer = -1;
        for (var i = 0; i < 4; i++) {
            this.choice[i] = this.randomise(0, 11);
            this.choiceItem.push({
                countryName: this.asiaInfo[this.choice[i]].countryName,
                fullName: this.asiaInfo[this.choice[i]].fullName,
                flag: this.asiaInfo[this.choice[i]].flag,
                id: this.choice[i]
            });
        }
        console.log(this.choice);
        this.answer = this.choice[Math.floor(Math.random() * this.choice.length)];
        this.question = "Flag of " + this.asiaInfo[this.answer].countryName;
        //var postmessage = "hi my favorite site is " + answer;
        //console.log(postmessage);
    };
    FuncStartLevelPage.prototype.randomise = function (min, max) {
        var checkRnd = true;
        var tmp = -1;
        while (checkRnd) {
            tmp = Math.floor(Math.random() * (max - min)) + min;
            if (this.choice.indexOf(tmp) >= 0) {
                checkRnd = true;
            }
            else {
                checkRnd = false;
                return tmp;
            }
        }
        return -1;
    };
    FuncStartLevelPage.prototype.submitQuestion = function () {
        var _this = this;
        if (this.selectCheck != -1) {
            this.confirm = this.alertCtrl.create({
                title: 'Confirm submit',
                message: '',
                buttons: [
                    {
                        text: 'No',
                        handler: function () {
                            console.log('Disagree clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log('Agree clicked');
                            _this.checkAnswer();
                        }
                    }
                ]
            });
            this.confirm.present();
        }
        else {
            alert('Please select choice.');
        }
    };
    FuncStartLevelPage.prototype.selectAnswer = function (index, idd) {
        this.selectCheck = index;
        this._id = idd;
    };
    FuncStartLevelPage.prototype.checkAnswer = function () {
        if (this.answer == this._id) {
            this.score = this.score + 1;
            alert('Very Good !!!!');
            this.rndChoice();
        }
        else {
            this.score = this.score - 1;
            alert('Answer in incorrect.');
        }
        this.answerNumber = this.answerNumber + 1;
        if (this.answerNumber == 11) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__func_start_summary_func_start_summary__["a" /* FuncStartSummaryPage */], {
                score: this.score
            });
            this.vw.dismiss();
        }
        this.selectCheck = -1;
    };
    return FuncStartLevelPage;
}());
FuncStartLevelPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-func-start-level',template:/*ion-inline-start:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/func-start-level/func-start-level.html"*/'<ion-header>\n    <ion-title></ion-title>\n    <ion-buttons end>\n      Score : \n      <button ion-button (click)="rndChoice()">\n        {{ score }}\n      </button>\n    </ion-buttons>\n</ion-header>\n\n\n<ion-content padding>\n  <h3> {{ answerNumber }}) {{ question }} ?</h3>\n  <ion-list>\n    <ion-item *ngFor="let item of choiceItem; let i=index" color="{{ i == selectCheck ? \'primary\' : \'\' }}" (click)="selectAnswer(i, item.id)">\n      <ion-thumbnail item-start>\n        <img src="assets/images/{{ item.flag }}">\n      </ion-thumbnail>\n      <h4>Choice {{ i+1 }}</h4>\n    </ion-item>\n  </ion-list>\n  <div>\n    <button ion-button full large color="btEasyPassLogin" block (click)="submitQuestion()">Submit an answer</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/func-start-level/func-start-level.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
], FuncStartLevelPage);

//# sourceMappingURL=func-start-level.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncStartSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuncStartSummaryPage = (function () {
    function FuncStartSummaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.score = 0;
        this.scoreDes = "";
        this.score = navParams.get("score");
        if (this.score > 5) {
            this.scoreDes = "Very Good.";
        }
        else {
            this.scoreDes = "Oh Very bad.";
        }
    }
    FuncStartSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FuncStartSummaryPage');
    };
    return FuncStartSummaryPage;
}());
FuncStartSummaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-func-start-summary',template:/*ion-inline-start:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/func-start-summary/func-start-summary.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Summary</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      <ion-toolbar>\n        Asian Learning Flag Summary\n      </ion-toolbar>\n      <img src="assets/images/asian_flag.png">\n      <h2 class="slide-title">Total Score = {{ score }}</h2>\n      <h3>{{ scoreDes }}</h3>\n</ion-content>\n'/*ion-inline-end:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/pages/func-start-summary/func-start-summary.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], FuncStartSummaryPage);

//# sourceMappingURL=func-start-summary.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_func_regis_func_regis__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_func_start_func_start__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_func_start_level_func_start_level__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_func_start_summary_func_start_summary__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_func_regis_func_regis__["a" /* FuncRegisPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_func_start_func_start__["a" /* FuncStartPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_func_start_level_func_start_level__["a" /* FuncStartLevelPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_func_start_summary_func_start_summary__["a" /* FuncStartSummaryPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_func_regis_func_regis__["a" /* FuncRegisPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_func_start_func_start__["a" /* FuncStartPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_func_start_level_func_start_level__["a" /* FuncStartLevelPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_func_start_summary_func_start_summary__["a" /* FuncStartSummaryPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/chatree/Desktop/IONIC_PROJ/ASIAN_FLAG/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map