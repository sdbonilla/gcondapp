import { Component, OnInit } from '@angular/core';
import { CrudreunionService } from '../service/crudreunion.service';
import { reunI } from '../shared/reunion.interface';

@Component({
  selector: 'app-gestion-reunion',
  templateUrl: './gestion-reunion.page.html',
  styleUrls: ['./gestion-reunion.page.scss'],
})
export class GestionReunionPage implements OnInit {

  reuni: reunI[];

  constructor(private reuniService: CrudreunionService) { }

  ngOnInit() {
    this.reuniService.getReuniones().subscribe(res=>this.reuni = res);
  }

}
