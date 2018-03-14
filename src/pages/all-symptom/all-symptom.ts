import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DrugDataProvider } from '../../providers/drug-data/drug-data';

/**
 * Generated class for the AllSymptomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-symptom',
  templateUrl: 'all-symptom.html',
})
export class AllSymptomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public drugDataProvider : DrugDataProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AllSymptomPage');
	//this.drugDataProvider.getSymptom();

  }

}
