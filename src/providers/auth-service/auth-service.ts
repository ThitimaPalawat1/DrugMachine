import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class AuthServiceProvider {

isLogin = false;

  constructor(public http: HttpClient) {
    console.log('AuthServiceProvider Acitivated');
  }

  login(loginData){
  	return new Promise((resolve,reject)=>{
			this.http.post('http://localhost:8100/api/login/', 
	{ 
	  username : loginData.username,
	  password : loginData.password
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

  signup(signupData){
  	return new Promise((resolve,reject)=>{
			this.http.post('http://localhost:8100/api/register/user/', 
	{ 
	  username : signupData.username,
	  password : signupData.password,
	  phone_number:  signupData.phone_number,
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

  logout(){
		return new Promise((resolve,reject)=>{
			this.http.get('http://localhost:8100/api/logout')
			.subscribe(res=>{
				resolve(res);
			}, err=> {reject(err);}
			)
		});
	}





}
