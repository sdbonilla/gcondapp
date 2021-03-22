import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PisosTorre2PageRoutingModule } from './pisos-torre2-routing.module';

import { PisosTorre2Page } from './pisos-torre2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PisosTorre2PageRoutingModule
  ],
  declarations: [PisosTorre2Page]
})
export class PisosTorre2PageModule {}
