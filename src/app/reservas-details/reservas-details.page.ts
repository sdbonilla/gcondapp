import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { CrudreservaService } from '../service/crudreserva.service';
import { reservI } from '../shared/reserva.interface';

@Component({
  selector: 'app-reservas-details',
  templateUrl: './reservas-details.page.html',
  styleUrls: ['./reservas-details.page.scss'],
})
export class ReservasDetailsPage implements OnInit {

  reserva: reservI = {

    lugar: '',
    nreserva: '',
    aptoreserva: '',
    fecha: new Date(),
    priority: 0,
  }
  reservId = null;
  constructor(private route: ActivatedRoute, private nav: NavController, private reservaService: CrudreservaService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.reservId = this.route.snapshot.params['id'];
    if (this.reservId) {
      this.loadTodo();
    }
  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.reservaService.getReserva(this.reservId).subscribe(todo => {
      loading.dismiss();
      this.reserva = todo;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();

    if (this.reservId) {
      this.reservaService.updateReservas(this.reserva, this.reservId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    } else {
      this.reservaService.addReservas(this.reserva).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }
  }
  async onRemoveTodo(idTodo: string) {
    this.reservaService.removeReservas(idTodo);
  }
}
