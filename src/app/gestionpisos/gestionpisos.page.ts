import { Component, OnInit } from '@angular/core';
import { CrudpisosService } from '../service/crudpisos.service';
import { pisoI } from '../shared/pisos.interface';

@Component({
  selector: 'app-gestionpisos',
  templateUrl: './gestionpisos.page.html',
  styleUrls: ['./gestionpisos.page.scss'],
})
export class GestionpisosPage implements OnInit {

  pisos: pisoI[];

  constructor(private pisoService: CrudpisosService) { }

  ngOnInit() {
    this.pisoService.getPisos().subscribe(res=>this.pisos = res);
  }

}
