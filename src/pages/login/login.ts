import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import { Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { MainpagePage } from '../mainpage/mainpage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  mainpagePage=MainpagePage;
  loading: any;
  loginData = { username:'', password:'' };
  accountData: any;


  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, public auth: AuthServiceProvider,public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.logout();

  }

  login() {
    /*this.events.publish('user:login'); /*dev exit */
  	this.auth.login(this.loginData)
  	.then( res=>{
      if ('balance' in res) {
        console.log("log in successful data:",res,"end res")
        this.accountData = res;
        this.presentToast();
        this.auth.isLogin = true;
        this.events.publish('user:login');
        this.navCtrl.push(this.mainpagePage)
  		  
      }
      else{
        console.log("res",res,"endres")
        }
      });
  }

  logout(){
    this.auth.logout()
    .then( res=>{
      console.log(res)
      }, err=> {
        console.log(err);
      }
    ); 
  }

  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Log in successful!',
    duration: 3000,
    position: 'bottom'
  });
  toast.present();
  }


}
