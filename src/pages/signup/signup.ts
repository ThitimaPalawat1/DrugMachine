import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

	signupData = { username:'', password:'', email:'', phone_number:'',password2:''}
  constructor(public navCtrl: NavController, public navParams: NavParams , public auth : AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    console.log("hi")
    this.auth.signup(this.signupData)
    .then( res=>{
      console.log(res)
      }, err=> {
        console.log(err)
      }
    )
  }
}
