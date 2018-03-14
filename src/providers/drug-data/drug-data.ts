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
machineData:any;
chosenMachine:number;

  constructor(public http: HttpClient) {
    console.log('Hello DrugDataProvider Provider');
  }

  	getDrug(){
		return new Promise((resolve,reject)=>{
			this.http.get('http://localhost:8100/api/drug/'+ this.chosenMachine +'/list_central/')
			.subscribe(data=>{
				this.drugData = data;
				resolve(data);
			})
		});
	}

	getOTP(){
		var temp = new Array();
		for(var i = 0; i < this.inCart.length; ++i){
			    temp.push(
					    {
					    	drug_id: this.inCart[i].item.id_tray,
					    	count: this.inCart[i].amount
					    }
			    	);
		}
			
		return new Promise((resolve,reject)=>{
			this.http.post('http://localhost:8100/api/order/app-make-order/', 
		{ 
			machine_id : this.chosenMachine,
		  	order_list : temp
		}, 
		{
		  headers: { 'Content-Type': 'application/json' }
		})
				.subscribe(res=>{
					resolve(res);
				}, err=> {reject(err);}
				)
		});
		
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
	}

	removeFromCart(item_id){
		for(var i = 0; i < this.inCart.length; ++i){
			if(this.inCart[i].item.id == item_id){
				this.cartPrice = this.cartPrice - (this.inCart[i].item.price * this.inCart[i].amount)
				this.inCart.splice(i,1);
			}
		}
	}

	getMachine(){
		return new Promise((resolve,reject)=>{
			this.http.get('http://localhost:8100/api/machine/')
			.subscribe(data=>{
				this.machineData = data;
				resolve(data);
			})
		});

	}

	chooseMachine(machineID){
		this.chosenMachine = machineID;
		console.log("choose machine number ",machineID);
	}


}
