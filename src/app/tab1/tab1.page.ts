import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { CrudreservaService } from '../service/crudreserva.service';
import { CruduserService } from '../service/cruduser.service';
import { reservI } from '../shared/reserva.interface';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

export class Tab1Page implements OnInit {
  reserv: reservI[];
  duser$: Observable<User> = this.authSvc.afAuth.user;
  user: User[];
  
  constructor(private userSvc: CruduserService, private reservService: CrudreservaService, private authSvc: AuthService) { }

  ngOnInit() {
    this.userSvc.getUsers().subscribe(res=>this.user = res);
    this.reservService.getReservas().subscribe(res=>this.reserv = res);
  }

}
