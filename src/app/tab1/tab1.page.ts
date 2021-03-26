import { Component, OnInit } from '@angular/core';
import { CrudreservaService } from '../service/crudreserva.service';
import { reservI } from '../shared/reserva.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

export class Tab1Page implements OnInit {
  reserv: reservI[];

  
  constructor(private reservService: CrudreservaService) { }

  ngOnInit() {
    this.reservService.getReservas().subscribe(res=>this.reserv = res);
  }

}
