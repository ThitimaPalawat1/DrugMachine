import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstTabPage } from './first-tab';

@NgModule({
  declarations: [
    FirstTabPage,
  ],
  imports: [
    IonicPageModule.forChild(FirstTabPage),
  ]
})
export class FirstTabPageModule {}
