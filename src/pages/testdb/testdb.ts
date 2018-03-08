import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//component

import { DrugDataProvider } from '../../providers/drug-data/drug-data';


/**
 * Generated class for the TestdbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testdb',
  templateUrl: 'testdb.html',
})
export class TestdbPage {

	drugList : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DrugProvider : DrugDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestdbPage');
  }

  ionViewWillEnter(){
  	this.DrugProvider.getDrug()
  	.then((data:any)=>{
  		this.drugList =data;
  	});
  }

}
