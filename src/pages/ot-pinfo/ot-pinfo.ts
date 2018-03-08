import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DrugDataProvider} from '../../providers/drug-data/drug-data';
/**
 * Generated class for the OtPinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ot-pinfo',
  templateUrl: 'ot-pinfo.html',
})
export class OtPinfoPage {

OTP:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public drugProvider: DrugDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtPinfoPage');
    /*Sent OTP Request here with drugProvider*/
    this.OTP = this.drugProvider.OTP;
  }



}
