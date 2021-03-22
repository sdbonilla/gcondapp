import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
import { SettingsPage } from '../settings/settings.page';
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  constructor(private modalctrl: ModalController) { }

  async showModal(){
    const modal = await this.modalctrl.create({
      component: SettingsPage
    })
    await modal.present();
  }
  ngOnInit() {
  }

}
