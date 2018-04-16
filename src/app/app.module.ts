import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MillionaireComponent} from './millionaire/millionaire.component';
import {ResultsComponent} from './results/results.component';
import {RegistrationComponent} from './registration/registration.component';
import {AppRoutingModule, RoutingComponents} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {CommonService} from "../servise/common.service";



@NgModule({
    declarations: [
        AppComponent,
        MillionaireComponent,
        ResultsComponent,
        RegistrationComponent,
        RoutingComponents
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule


    ],
    providers: [CommonService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
