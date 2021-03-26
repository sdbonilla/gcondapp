import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AptopayPageRoutingModule } from './aptopay-routing.module';

import { AptopayPage } from './aptopay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AptopayPageRoutingModule
  ],
  declarations: [AptopayPage]
})
export class AptopayPageModule {}
