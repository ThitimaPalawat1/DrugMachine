import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrPage } from '../or/or';
import { DrugDataProvider } from '../../providers/drug-data/drug-data';

/**
 * Generated class for the MainpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html',
})
export class MainpagePage {

orPage  = OrPage;
machineData:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public drugDataProvider : DrugDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainpagePage');
  	this.drugDataProvider.getMachine()
  	.then( (data:any) => {
      this.machineData = data;
      console.log(data)
      });
  }

  chooseMachine(machineID){
  	this.drugDataProvider.chooseMachine(machineID);
  	this.navCtrl.push(this.orPage);
  }

}
