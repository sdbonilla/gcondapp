import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReunionDetailsPageRoutingModule } from './reunion-details-routing.module';

import { ReunionDetailsPage } from './reunion-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReunionDetailsPageRoutingModule
  ],
  declarations: [ReunionDetailsPage]
})
export class ReunionDetailsPageModule {}
