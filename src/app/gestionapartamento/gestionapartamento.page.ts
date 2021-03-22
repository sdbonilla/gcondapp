import { Component, OnInit } from '@angular/core';
import { CrudapartamentoService } from '../service/crudapartamento.service';
import { apartI } from '../shared/apartamento.interface';

@Component({
  selector: 'app-gestionapartamento',
  templateUrl: './gestionapartamento.page.html',
  styleUrls: ['./gestionapartamento.page.scss'],
})
export class GestionapartamentoPage implements OnInit {

  aptos: apartI[];

  constructor(private aptosService: CrudapartamentoService) { }

  ngOnInit() {
    this.aptosService.getAptos().subscribe(res=>this.aptos = res);
  }

}
