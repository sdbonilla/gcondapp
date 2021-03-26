import { Component, OnInit } from '@angular/core';
import { EdificeI } from "../shared/edifice.interface";
import { CrudedificeService } from "../service/crudedifice.service";
import { pisoI } from '../shared/pisos.interface';
import { apartI } from '../shared/apartamento.interface';
import { CrudpisosService } from '../service/crudpisos.service';
import { CrudapartamentoService } from '../service/crudapartamento.service';
import { ActionSheetController } from '@ionic/angular';
import { AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-gestiontorres',
  templateUrl: './gestiontorres.page.html',
  styleUrls: ['./gestiontorres.page.scss'],
  providers: [CrudpisosService]
})
export class GestiontorresPage implements OnInit {
  private cruded: AngularFirestoreCollection<apartI>;
  SelectedTorre: EdificeI = { id: '', codtorre: '', ntorre: '' };
  SelectedPiso: pisoI = { id: '', codtorreps: '', npiso: '', pcodapart: '' };
  SelectedAptos: apartI = { id: '', codpiso: 0, numapart: '', propietario: '', saldo: 0, aptcodpiso: '' };
  torres: EdificeI[];
  pisos: pisoI[];
  aptos: apartI[];
  pisoss = [];
  apartos = [];
  aptidselected = "";
  aptinfo = [];
  aptoId = null;
  constructor(private torresService: CrudedificeService, private pisosService: CrudpisosService,
    private aptosService: CrudapartamentoService, public actionSheetController: ActionSheetController) { }


  async presentActionSheet(id: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Datos del apartamento',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {

          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  ngOnInit() {
    this.torresService.getTorres().subscribe(res => this.torres = res);
    this.pisosService.getPisos().subscribe(res => this.pisos = res);
    this.aptosService.getAptos().subscribe(res => this.aptos = res);
  }

  getpisos(codtorre: string) {
    this.pisoss = this.pisos.filter(item => item.codtorreps === codtorre);
    console.log("piso=>", this.pisoss);
  }

  getaptos(aptcodpiso: string) {
    this.apartos = this.aptos.filter(item => item.aptcodpiso === aptcodpiso);

  }

  getinfoapartamento() {
    this.aptinfo = this.aptos.filter(item => item.id === this.aptidselected);

  }

  selectapt(id: string) {
    this.aptidselected = id;
    console.log("aptidselected=>", this.aptidselected);
  }

}
