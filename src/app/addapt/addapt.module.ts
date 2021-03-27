import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddaptPageRoutingModule } from './addapt-routing.module';

import { AddaptPage } from './addapt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddaptPageRoutingModule
  ],
  declarations: [AddaptPage]
})
export class AddaptPageModule {}
