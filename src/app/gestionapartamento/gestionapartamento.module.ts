import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionapartamentoPageRoutingModule } from './gestionapartamento-routing.module';

import { GestionapartamentoPage } from './gestionapartamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionapartamentoPageRoutingModule
  ],
  declarations: [GestionapartamentoPage]
})
export class GestionapartamentoPageModule {}
