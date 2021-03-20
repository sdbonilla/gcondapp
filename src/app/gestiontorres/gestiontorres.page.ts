import { Component, OnInit } from '@angular/core';
import { EdificeI } from "../shared/edifice.interface";
import { CrudedificeService } from "../service/crudedifice.service";
@Component({
  selector: 'app-gestiontorres',
  templateUrl: './gestiontorres.page.html',
  styleUrls: ['./gestiontorres.page.scss'],
})
export class GestiontorresPage implements OnInit {

  torres: EdificeI[];

  constructor(private torresService: CrudedificeService) { }

  ngOnInit() {
    this.torresService.getTorres().subscribe(res=>this.torres = res);
  }

}
