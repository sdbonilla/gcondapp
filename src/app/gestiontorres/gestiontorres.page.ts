import { Component, OnInit } from '@angular/core';
import { EdificeI } from "../shared/edifice.interface";
import { CrudedificeService } from "../service/crudedifice.service";
import { pisoI } from '../shared/pisos.interface';
import { apartI } from '../shared/apartamento.interface';
import { CrudpisosService } from '../service/crudpisos.service';
import { CrudapartamentoService } from '../service/crudapartamento.service';
import { filter } from 'rxjs/operators';


interface User {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'app-gestiontorres',
  templateUrl: './gestiontorres.page.html',
  styleUrls: ['./gestiontorres.page.scss'],
  providers: [CrudpisosService]
})



export class GestiontorresPage implements OnInit {
  users: User[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];

  compareWith(o1: User, o2: User | User[]) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((u: User) => u.id === o1.id);
    }

    return o1.id === o2.id;
  }
  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };
  SelectedTorre: EdificeI = { id: '', codtorre: '', ntorre: '' }; 
  torres: EdificeI[];
  pisos: pisoI[];
  aptos: apartI[];

  constructor(private torresService: CrudedificeService, private pisosService: CrudpisosService, private aptosService: CrudapartamentoService) { }

  ngOnInit() {
    this.torresService.getTorres().subscribe(res => this.torres = res);   
  }

  onSelect(codtorre: string): void {
    console.log("torre ->", codtorre);

    
  }

}
