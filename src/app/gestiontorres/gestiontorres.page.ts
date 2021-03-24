import { Component, OnInit } from '@angular/core';
import { EdificeI } from "../shared/edifice.interface";
import { CrudedificeService } from "../service/crudedifice.service";
import { pisoI } from '../shared/pisos.interface';
import { apartI } from '../shared/apartamento.interface';
import { CrudpisosService } from '../service/crudpisos.service';
import { CrudapartamentoService } from '../service/crudapartamento.service';


@Component({
  selector: 'app-gestiontorres',
  templateUrl: './gestiontorres.page.html',
  styleUrls: ['./gestiontorres.page.scss'],
  providers: [CrudpisosService]
})
export class GestiontorresPage implements OnInit {

  SelectedTorre: EdificeI = { id: '', codtorre: '', ntorre: '' };
  SelectedPiso: pisoI = { id: '', codtorreps: '', npiso: '', pcodapart: '' };
  SelectedAptos: apartI = { id: '', codpiso: 0 , numapart: '', propietario: '', saldo: 0, aptcodpiso: ''}; 
  torres: EdificeI[];
  pisos: pisoI[];
  aptos: apartI[];
  pisoss = [];
  apartos = [];
  aptidselected = "";
  aptinfo = [];
  constructor(private torresService: CrudedificeService, private pisosService: CrudpisosService, private aptosService: CrudapartamentoService) { }

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

  getinfoapartamento(){
    this.aptinfo = this.aptos.filter(item => item.id === this.aptidselected);
   
  }
  
  selectapt(id: string){
    this.aptidselected = id;
    console.log("aptidselected=>", this.aptidselected);
  }

}
