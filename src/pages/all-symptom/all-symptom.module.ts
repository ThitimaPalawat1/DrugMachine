import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllSymptomPage } from './all-symptom';

@NgModule({
  declarations: [
    AllSymptomPage,
  ],
  imports: [
    IonicPageModule.forChild(AllSymptomPage),
  ],
})
export class AllSymptomPageModule {}
