import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { CrudapartamentoService } from '../service/crudapartamento.service';
import { apartI } from '../shared/apartamento.interface';


@Component({
  selector: 'app-addapt',
  templateUrl: './addapt.page.html',
  styleUrls: ['./addapt.page.scss'],
})
export class AddaptPage implements OnInit {
  apto: apartI ={
    id: '',
    iduser: 0,
    numapart: '',
    propietario: '',
    saldo: 0,
    codpiso: 0,
    aptcodpiso: '',
    pago: 0,
    estado: '',
    teluser: 0,
    finicio: new Date,
    tipodocuser: ''
  }
  aptoId = null;
  async close(){
    await this.modalctrl.dismiss();
  }
  constructor(private modalctrl: ModalController, private aptoSvc: CrudapartamentoService, private route: ActivatedRoute, private nav: NavController, private loadingController: LoadingController) { }

  ngOnInit() {
    this.aptoId = this.route.snapshot.params['id'];
    if (this.aptoId) {
      this.loadAptoData();
    }
  }
  async loadAptoData(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.aptoSvc.getApto(this.aptoId).subscribe(todo => {
      loading.dismiss();
      this.apto = todo;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();

    if (this.aptoId) {
      this.aptoSvc.updateApto(this.apto, this.aptoId).then(() => {
        loading.dismiss();
        this.modalctrl.dismiss();
      });
    } else {
      this.aptoSvc.addApto(this.apto).then(() => {
        loading.dismiss();
        this.modalctrl.dismiss();
      });
    }
  }
  async onRemoveTodo(idTodo: string) {
    this.aptoSvc.removeApto(idTodo);
  }

}
