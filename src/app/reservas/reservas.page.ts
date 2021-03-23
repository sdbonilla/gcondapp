import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
import { CrudreservaService } from '../service/crudreserva.service';
import { SettingsPage } from '../settings/settings.page';
import { reservI } from '../shared/reserva.interface';
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  reserv: reservI[];
  constructor(private modalctrl: ModalController, private reservService: CrudreservaService) { }

  async showModal(){
    const modal = await this.modalctrl.create({
      component: SettingsPage
    })
    await modal.present();
  }


  ngOnInit() {
    this.reservService.getReservas().subscribe(res=>this.reserv = res);
  }

}
