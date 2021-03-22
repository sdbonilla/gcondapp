import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AptodetailsPageRoutingModule } from './aptodetails-routing.module';

import { AptodetailsPage } from './aptodetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AptodetailsPageRoutingModule
  ],
  declarations: [AptodetailsPage]
})
export class AptodetailsPageModule {}
