import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChdrugPage } from '../chdrug/chdrug';

/**
 * Generated class for the OrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-or',
  templateUrl: 'or.html',
})
export class OrPage {

chdrugPage  = ChdrugPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrPage');
  }

}
