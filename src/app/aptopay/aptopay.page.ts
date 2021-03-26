import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { CrudapartamentoService } from '../service/crudapartamento.service';
import { apartI } from '../shared/apartamento.interface';

@Component({
  selector: 'app-aptopay',
  templateUrl: './aptopay.page.html',
  styleUrls: ['./aptopay.page.scss'],
})
export class AptopayPage implements OnInit {

  apto: apartI ={
    
    propietario: '',
    aptcodpiso: '',
    id: '',
    numapart: '',
    saldo: 0,
    codpiso: 0
  }
  aptoId= null;
  constructor(private route: ActivatedRoute, private nav: NavController, private aptoSvc: CrudapartamentoService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.aptoId = this.route.snapshot.params['id'];
    if (this.aptoId){
      this.loadTodo();
    }
  }

  async loadTodo(){
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
        this.nav.navigateForward('/tabs/tab2');
      });
    } else {
      this.aptoSvc.addApto(this.apto).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }
  }
  

}


