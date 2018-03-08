import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the DrugDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DrugDataProvider {
OTP:any;
inCart = new Array();
cartPrice:number = 0;
drugData:any;

  constructor(public http: HttpClient) {
    console.log('Hello DrugDataProvider Provider');
  }

  	getDrug(){
		return new Promise((resolve,reject)=>{
			this.http.get('http://localhost:8100/api/drug/list_central/?format=json')
			.subscribe(data=>{
				this.drugData = data;
				resolve(data);
			})
		});
	}

	getOTP(){
		/*OTP request here via sent id tray*/
		this.OTP = 5;
	}

	addCart(item){

	    var count = 0;
	    var found = false;
		for(var i = 0; i < this.inCart.length; ++i){
			    if(this.inCart[i].item.id == item.id){
			        this.inCart[i].amount = this.inCart[i].amount + 1;
			        found = true;
			    }
		}
		if (!found){
			this.inCart.push({
				item : item,
				amount : 1
			})
		}
		this.cartPrice = this.cartPrice + item.price;
		console.log(this.inCart);
	}


}
