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
})
export class GestiontorresPage implements OnInit {

  torres: EdificeI[];
  pisos: pisoI[];
  aptos: apartI[];

  constructor(private torresService: CrudedificeService, private pisosService: CrudpisosService, private aptosService: CrudapartamentoService) { }

  ngOnInit() {
    this.torresService.getTorres().subscribe(res=>this.torres = res);
    this.pisosService.getPisos().subscribe(res=>this.pisos = res);
    this.aptosService.getAptos().subscribe(res=>this.aptos = res);
  }

}
