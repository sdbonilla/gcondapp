import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudreservaService } from '../service/crudreserva.service';
import { reservI } from '../shared/reserva.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  reserv: reservI[];
  constructor(private modalctrl: ModalController, private reservService: CrudreservaService) { } 
  async close(){
    await this.modalctrl.dismiss();
  }

  ngOnInit() {
    this.reservService.getReservas().subscribe(res=>this.reserv = res);
  }

}
