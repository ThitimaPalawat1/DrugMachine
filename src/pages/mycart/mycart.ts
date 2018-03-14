import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { DrugDataProvider } from '../../providers/drug-data/drug-data';
import { ChdrugPage } from '../chdrug/chdrug';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the MycartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mycart',
  templateUrl: 'mycart.html',
})
export class MycartPage {
cartData:any;
paymentPage = PaymentPage;
chdrugPage = ChdrugPage;
price:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public drugDataProvider : DrugDataProvider,private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MycartPage');
    this.refreshData();
  }

  refreshData(){
  	this.cartData = this.drugDataProvider.inCart;
  	this.price = this.drugDataProvider.cartPrice;
  }

  remove(item_id){
    this.drugDataProvider.removeFromCart(item_id);
    this.refreshData();
    this.presentToast();
  }

  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Removed item from cart!',
    duration: 1000,
    position: 'bottom'
  });
  toast.present();
  }

}
