import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import { Tab3Page } from './tab3.page';
import { AdminPageModule } from '../admin/admin.module';
import { LoginPageModule } from '../login/login.module';
import { ProfilePageModule } from '../profile/profile.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3PageRoutingModule,
    LoginPageModule,
    AdminPageModule,
    ProfilePageModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
