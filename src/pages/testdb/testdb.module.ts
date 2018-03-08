import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestdbPage } from './testdb';

@NgModule({
  declarations: [
    TestdbPage,
  ],
  imports: [
    IonicPageModule.forChild(TestdbPage),
  ],
})
export class TestdbPageModule {}
