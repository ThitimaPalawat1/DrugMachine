import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DrugDataProvider } from '../../providers/drug-data/drug-data';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
OTP:any;
paymentData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public drugDataProvider : DrugDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.getOTP();
  }


  getOTP(){
    this.drugDataProvider.getOTP()
    .then( res=>{
      this.paymentData = res;
      this.OTP = this.paymentData.otp;
      }, err=> {
        console.log("err",err);
        }
      );
  }

}
