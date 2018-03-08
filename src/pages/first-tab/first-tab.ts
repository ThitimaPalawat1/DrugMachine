import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';


/**
 * Generated class for the FirstTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first-tab',
  templateUrl: 'first-tab.html'
})
export class FirstTabPage {

  loginRoot = LoginPage;
  signupRoot = SignupPage;


  constructor(public navCtrl: NavController) {}

}
