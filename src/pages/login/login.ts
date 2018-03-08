import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import { Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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

  loading: any;
  loginData = { username:'', password:'' };
  data: any;


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
  		console.log(res)
  		}, err=> {
  			console.log(err.status);
  			if(err.status == 200){
          this.presentToast();
          this.auth.isLogin = true;
          this.events.publish('user:login');
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
