webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RoutingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__millionaire_millionaire_component__ = __webpack_require__("./src/app/millionaire/millionaire.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__("./src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__results_results_component__ = __webpack_require__("./src/app/results/results.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'game', component: __WEBPACK_IMPORTED_MODULE_2__millionaire_millionaire_component__["a" /* MillionaireComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'results', component: __WEBPACK_IMPORTED_MODULE_4__results_results_component__["a" /* ResultsComponent */] },
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    { path: '**', redirectTo: '/.', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var RoutingComponents = [__WEBPACK_IMPORTED_MODULE_2__millionaire_millionaire_component__["a" /* MillionaireComponent */], __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */], __WEBPACK_IMPORTED_MODULE_4__results_results_component__["a" /* ResultsComponent */]];


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__millionaire_millionaire_component__ = __webpack_require__("./src/app/millionaire/millionaire.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__results_results_component__ = __webpack_require__("./src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_registration_component__ = __webpack_require__("./src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servise_common_service__ = __webpack_require__("./src/servise/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__millionaire_millionaire_component__["a" /* MillionaireComponent */],
                __WEBPACK_IMPORTED_MODULE_4__results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["b" /* RoutingComponents */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__servise_common_service__["a" /* CommonService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/millionaire/millionaire.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Start player  -->\n<div *ngIf=\"switch\" class=\"card b_color\">\n    <div class=\"card-block text-nowrap text-center\">\n        <h1 style=\"color: black\">\n            Player {{user.name+\" \"}}{{user.last_name+\" \"}}\n        </h1>\n    </div>\n</div>\n<!--End player -->\n\n<!--Start game -->\n<div class=\"container\">\n    <div *ngIf=\"switch_1\" class=\"row bord justify-content-center \">\n\n        <div class=\"col-12 col-md-10  bord_1 center \">\n\n            <h1 class=\"text-center\">Question</h1>\n            <h3 style=\"text-align: center\">{{quest.question}}</h3></div>\n        <div class=\"row \">\n            <div *ngFor=\"let answer of quest.content;let i = index\" class=\"col-6 \">\n                <div class=\"col-12 border_2\" tabindex=\"1\" (click)=\"selectAnswer(i)\"><p>{{answer}}</p></div>\n            </div>\n            <!-- Button -->\n            <div class=\"col-md-12 text-center\">\n                <button id=\"singlebutton\" name=\"singlebutton\" class=\"btn btn-primary\" [disabled]=\"disable_1\"\n                        (click)=\"stepChange()\">Next Step\n                </button>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- End game -->\n\n<!-- Start player result -->\n<div *ngIf=\"disable_div\" class=\"container\">\n    <h2>Your Result</h2>\n    <p>You answered {{this.answers.length}} questions correctly out of 5.</p>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"postPlayerResult()\">\n        Top Result\n    </button>\n</div>\n<!-- End player result -->"

/***/ }),

/***/ "./src/app/millionaire/millionaire.component.scss":
/***/ (function(module, exports) {

module.exports = ".bord {\n  border: 5px solid #5D91EE;\n  border-radius: 7px;\n  margin-top: 20px;\n  height: 550px;\n  background-color: black; }\n\n.bord_1 {\n  border: 5px solid #5D91EE;\n  border-radius: 7px;\n  margin-top: 20px;\n  height: 200px; }\n\n.border_2 {\n  border: 5px solid #5D91EE;\n  border-radius: 7px;\n  height: 50px;\n  text-align: center;\n  padding: 5px;\n  background-color: black; }\n\n.border_2:hover {\n  background-color: #5D91EE;\n  cursor: pointer; }\n\n.border_2:focus {\n  background-color: #5D91EE; }\n\n.b_color {\n  background-color: #5D91EE; }\n\nh1, h2, h3, h4, p {\n  color: azure; }\n\np {\n  font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/millionaire/millionaire.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MillionaireComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servise_common_service__ = __webpack_require__("./src/servise/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MillionaireComponent = /** @class */ (function () {
    function MillionaireComponent(common, router) {
        var _this = this;
        this.common = common;
        this.router = router;
        this.user = [];
        this.questions = [];
        this.quest = [];
        this.switch = false;
        this.switch_1 = false;
        this.answers = [];
        this.disable_1 = true;
        this.disable_div = false;
        // player request
        this.getPlayer = function () {
            _this.common.getInfo().subscribe(function (res) {
                _this.data = res;
                _this.getData(_this.data[_this.data.length - 1]);
            });
        };
        this.getData = function (Data) {
            _this.user.push(Data);
            _this.user = _this.user[0];
            _this.switch = true;
            return _this.user;
        };
        // questions request
        this.getQuest = function () {
            _this.common.getQuestions().subscribe(function (res) {
                _this.ques_data = res;
                _this.getQuestData(_this.ques_data);
            });
        };
        this.getQuestData = function (Quest) {
            _this.questions.push(Quest);
            _this.questions = _this.questions[0];
            _this.x = Math.floor(Math.random() * 4) + 1;
            _this.quest = _this.questions[_this.x];
            _this.questions.splice(_this.x, 1);
            _this.switch_1 = true;
        };
        //work of the game
        this.stepChange = function (_) {
            _this.x = Math.floor(Math.random() * _this.questions.length - 1) + 1;
            _this.getAnswers();
            _this.quest = _this.questions[_this.x];
            _this.questions.splice(_this.x, 1);
            _this.switch_1 = true;
            _this.disable_1 = true;
            _this.quest === undefined ? _this.switch_1 = false : null;
            _this.switch_1 === false ? _this.disable_div = true : null;
        };
        this.getAnswers = function () {
            _this.ans === _this.quest.correct ? _this.answers.push(_this.quest.correct) : null;
        };
        this.selectAnswer = function (i) {
            _this.ans = i;
            _this.disable_1 = false;
        };
        // Player result post request
        this.postPlayerResult = function (_) {
            _this.common.postPlayer({
                name: _this.user.name,
                last_name: _this.user.last_name,
                email: _this.user.email,
                score: _this.answers.length
            }).subscribe(function (res) {
                res ? _this.router.navigate(['/results']) : null;
            });
        };
    }
    MillionaireComponent.prototype.ngOnInit = function () {
        this.getPlayer();
        this.getQuest();
    };
    MillionaireComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-millionaire',
            template: __webpack_require__("./src/app/millionaire/millionaire.component.html"),
            styles: [__webpack_require__("./src/app/millionaire/millionaire.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servise_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], MillionaireComponent);
    return MillionaireComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- registration -->\n\n<form novalidate\n      [formGroup]=\"info\" class=\"form-horizontal\">\n    <fieldset>\n\n        <label class=\"col-md-6\"><h3>Registration</h3></label>\n\n        <!-- Text input-->\n\n        <div class=\"form-group\"\n             [ngClass]=\"{\n        'has-danger': name.invalid && (name.dirty || name.touched),\n        'has-success': name.valid && (name.dirty || name.touched)\n      }\">\n            <label class=\"col-md-4 control-label\">First Name</label>\n            <div class=\"col-md-3\">\n                <input matInput placeholder=\"John\" type=\"text\"\n                       formControlName=\"name\"\n                       required class=\"form-control input-md\">\n            </div>\n            <div class=\"col-md-3\"\n                 *ngIf=\"name.errors && (name.dirty || name.touched)\">\n                <p class=\"text-danger\" *ngIf=\"name.errors.required\">First Name is required</p>\n            </div>\n        </div>\n\n        <!-- Text input-->\n\n        <div class=\"form-group\"\n             [ngClass]=\"{\n        'has-danger': last_name.invalid && (last_name.dirty || last_name.touched),\n        'has-success': last_name.valid && (last_name.dirty || last_name.touched)\n      }\">\n            <label class=\"col-md-4 control-label\">Last Name</label>\n            <div class=\"col-md-3\">\n                <input matInput placeholder=\"Doe\" type=\"text\"\n                       formControlName=\"last_name\"\n                       required class=\"form-control input-md\">\n            </div>\n            <div class=\"col-md-3\"\n                 *ngIf=\"last_name.errors && (last_name.dirty || last_name.touched)\">\n                <p *ngIf=\"last_name.errors.required\" class=\"text-danger\">Last Name is required</p>\n            </div>\n        </div>\n\n        <!-- Text input-->\n\n        <div class=\"form-group\"\n             [ngClass]=\"{\n        'has-danger': email.invalid && (email.dirty || email.touched),\n        'has-success': email.valid && (email.dirty || email.touched)\n   }\">\n            <label class=\"col-md-4 control-label\">Email</label>\n            <div class=\"col-md-3\">\n                <input matInput placeholder=\"johndoe@example.com\" type=\"email\"\n                       formControlName=\"email\"\n                       required class=\"form-control input-md\">\n            </div>\n            <div class=\"col-md-3\"\n                 *ngIf=\"email.errors && (email.dirty || email.touched)\">\n                <p class=\"text-danger\" *ngIf=\"email.errors.required\">Email is required</p>\n            </div>\n\n            <!-- Button  -->\n\n            <div class=\"form-group\">\n                <label class=\"col-md-4 control-label\" for=\"save\"></label>\n                <div class=\"col-md-8\">\n                    <button id=\"save\" name=\"save\" class=\"btn btn-success col-md-3\" [disabled]=\"info.invalid\"\n                            (click)=\"postPlay()\">Play\n                    </button>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n</form>\n\n\n<!-- Logo  -->\n<div class=\" logo\">\n    <div class=\"elipse elipse1\"></div>\n    <div class=\"elipse elipse2\"></div>\n    <div class=\"elipse elipse3\"></div>\n    <div class=\"elipse elipse4\"></div>\n    <div class=\"elipse elipse5\"></div>\n    <div class=\"elipse elipse6\"></div>\n    <div class=\"elipse elipse7\"></div>\n    <div class=\"elipse elipse8\"></div>\n    <div class=\"elipse elipse9\"></div>\n    <div class=\"title\">MILLIONAIRE</div>\n    <div class=\"inner-circle\"></div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/registration/registration.component.scss":
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 500px;\n  height: 500px;\n  background: linear-gradient(-45deg, #000 10%, #425ca9 90%);\n  border-radius: 50%;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border: 10px solid #c9def3;\n  text-shadow: 5px 5px 1px #000; }\n  .logo .elipse {\n    width: 40px;\n    height: 420px;\n    position: absolute;\n    border: 2px solid #9db7d2;\n    border-radius: 50% 100%;\n    z-index: 5;\n    left: 221px;\n    top: 32px; }\n  .logo .elipse1 {\n    -webkit-transform: rotate(20deg);\n            transform: rotate(20deg); }\n  .logo .elipse2 {\n    -webkit-transform: rotate(40deg);\n            transform: rotate(40deg); }\n  .logo .elipse3 {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg); }\n  .logo .elipse4 {\n    -webkit-transform: rotate(80deg);\n            transform: rotate(80deg); }\n  .logo .elipse5 {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg); }\n  .logo .elipse6 {\n    -webkit-transform: rotate(120deg);\n            transform: rotate(120deg); }\n  .logo .elipse7 {\n    -webkit-transform: rotate(140deg);\n            transform: rotate(140deg); }\n  .logo .elipse8 {\n    -webkit-transform: rotate(160deg);\n            transform: rotate(160deg); }\n  .logo .elipse9 {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .logo .inner-circle {\n    width: 380px;\n    height: 380px;\n    position: absolute;\n    background: #001621;\n    border: 10px solid #d2e4fa;\n    border-radius: 50%;\n    margin: auto;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 2; }\n  .logo .title {\n    font-size: 60px;\n    width: 500px;\n    z-index: 10;\n    position: absolute;\n    font-weight: bold;\n    color: #fff;\n    text-align: center;\n    top: 190px;\n    left: -10px; }\n  @media screen and (max-width: 800px) {\n  .logo {\n    position: relative; } }\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servise_common_service__ = __webpack_require__("./src/servise/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, common) {
        var _this = this;
        this.router = router;
        this.common = common;
        this.createFormControls = function () {
            _this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
            _this.last_name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
            _this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$")
            ]);
        };
        this.createForm = function () {
            _this.info = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
                name: _this.name,
                last_name: _this.last_name,
                email: _this.email,
            });
        };
        // request to send player data
        this.postPlay = function () {
            _this.common.postReg(_this.info.value).subscribe(function (res) {
                if (res) {
                    _this.router.navigate(['/game']);
                }
            });
        };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__servise_common_service__["a" /* CommonService */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/***/ (function(module, exports) {

module.exports = ".bg_color {\r\n    background-color: #5D91EE;\r\n}\r\n.btn_posit {\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- buttons -->\n<div class=\"btn_posit\">\n    <input class=\"btn btn-primary\" type=\"button\" value=\"home\" (click)=\"backHome()\">\n    <input class=\"btn btn-primary\" type=\"button\" value=\"game\" (click)=\"backGame()\">\n</div>\n\n<!-- title-->\n<div class=\"container text-center\">\n    <h2 style=\"color:azure\">Top Result</h2>\n</div>\n\n<!-- Top Players table -->\n<table id=\"example\" class=\"table table-striped table-bordered\" style=\"width:100%\">\n    <thead>\n    <tr style=\"color: azure\">\n        <th>ID</th>\n        <th>Name</th>\n        <th>Last Name</th>\n        <th>Email</th>\n        <th>Result</th>\n    </tr>\n    </thead>\n    <tbody class=\"bg_color\">\n\n    <tr *ngFor=\"let items of arr\">\n        <td>{{items.id}}</td>\n        <td>{{items.name}}</td>\n        <td>{{items.last_name}}</td>\n        <td>{{items.email}}</td>\n        <td>{{items.score}}</td>\n    </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servise_common_service__ = __webpack_require__("./src/servise/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(common, router) {
        var _this = this;
        this.common = common;
        this.router = router;
        this.arr_sort = [];
        // Player results request
        this.getPlayerResult = function () {
            _this.common.getPlayerList().subscribe(function (res) {
                _this.data_list = res;
                _this.getDataList(_this.data_list);
            });
        };
        this.getDataList = function (list) {
            _this.arr_sort.push(list);
            _this.arr = _this.arr_sort[0];
            for (var i = 0; i < _this.arr.sort(function (obj1, obj2) {
                return obj2.score - obj1.score;
            }).length; i++) {
                return _this.arr[i];
            }
        };
        // Redirect page
        this.backHome = function () {
            _this.router.navigate(['/registration']);
        };
        this.backGame = function () {
            _this.router.navigate(['/game']);
        };
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.getPlayerResult();
    };
    ResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-results',
            template: __webpack_require__("./src/app/results/results.component.html"),
            styles: [__webpack_require__("./src/app/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servise_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/servise/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonService = /** @class */ (function () {
    function CommonService(http) {
        var _this = this;
        this.http = http;
        this.postReg = function (obj) {
            return _this.http.post("http://localhost:5555/user/", obj);
        };
        this.getInfo = function () {
            return _this.http.get("http://localhost:5555/user/");
        };
        this.getQuestions = function () {
            return _this.http.get("http://localhost:5555/questions/");
        };
        this.postPlayer = function (user) {
            return _this.http.post("http://localhost:5555/top/", user);
        };
        this.getPlayerList = function () {
            return _this.http.get("http://localhost:5555/top/");
        };
    }
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map