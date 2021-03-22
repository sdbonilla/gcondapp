import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AptoDetailsPageRoutingModule } from './apto-details-routing.module';

import { AptoDetailsPage } from './apto-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AptoDetailsPageRoutingModule
  ],
  declarations: [AptoDetailsPage]
})
export class AptoDetailsPageModule {}
