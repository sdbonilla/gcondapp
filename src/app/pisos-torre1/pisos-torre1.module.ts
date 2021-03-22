import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PisosTorre1PageRoutingModule } from './pisos-torre1-routing.module';

import { PisosTorre1Page } from './pisos-torre1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PisosTorre1PageRoutingModule
  ],
  declarations: [PisosTorre1Page]
})
export class PisosTorre1PageModule {}
