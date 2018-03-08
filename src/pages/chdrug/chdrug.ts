import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MycartPage } from '../mycart/mycart';
import { DrugDataProvider } from '../../providers/drug-data/drug-data';
import { OtPinfoPage } from '../ot-pinfo/ot-pinfo' ;
import { ToastController } from 'ionic-angular';



/**
 * Generated class for the ChdrugPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chdrug',
  templateUrl: 'chdrug.html',
})
export class ChdrugPage {

drugData:any;
mycartPage = MycartPage;
otpPage = OtPinfoPage;
  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams,public drugDataProvider : DrugDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChdrugPage');
  }

  ionViewWillEnter() {

  	this.drugDataProvider.getDrug()
    .then( (data:any) => {
      this.drugData = data;
      console.log(data)
      });
  }

  addCart(item){
    this.drugDataProvider.addCart(item);
    this.presentToast();
    console.log(this.drugDataProvider.inCart)
  }


  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Add to cart successful!',
    duration: 1000,
    position: 'bottom'
  });
  toast.present();
  }



}
