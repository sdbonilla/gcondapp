import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PisosTorre3PageRoutingModule } from './pisos-torre3-routing.module';

import { PisosTorre3Page } from './pisos-torre3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PisosTorre3PageRoutingModule
  ],
  declarations: [PisosTorre3Page]
})
export class PisosTorre3PageModule {}
