import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestiontorresPageRoutingModule } from './gestiontorres-routing.module';

import { GestiontorresPage } from './gestiontorres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestiontorresPageRoutingModule
  ],
  declarations: [GestiontorresPage]
})
export class GestiontorresPageModule {}
