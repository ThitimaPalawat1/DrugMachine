
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstTabPage } from '../pages/first-tab/first-tab';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import {MainpagePage} from '../pages/mainpage/mainpage';
import { ChdrugPage } from '../pages/chdrug/chdrug';
import { MycartPage } from '../pages/mycart/mycart';
import { LocatePage } from '../pages/locate/locate';
import { PaymentPage } from '../pages/payment/payment';
import { OrPage } from '../pages/or/or';
import { TestdbPage } from '../pages/testdb/testdb';
import { OtPinfoPage } from '../pages/ot-pinfo/ot-pinfo';

import { map } from 'rxjs/operators';


import { Observable } from 'rxjs/Observable';
import { DrugDataProvider } from '../providers/drug-data/drug-data';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstTabPage,
    LoginPage,
    SignupPage,
    MainpagePage,
    ChdrugPage,
    MycartPage,
    LocatePage,
    PaymentPage,
    OrPage,
    TestdbPage,
    OtPinfoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicPageModule.forChild(LoginPage),
    IonicPageModule.forChild(SignupPage),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstTabPage,
    LoginPage,
    SignupPage,
    MainpagePage,
    ChdrugPage,
    MycartPage,
    LocatePage,
    PaymentPage,
    OrPage,
    TestdbPage,
    OtPinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DrugDataProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
