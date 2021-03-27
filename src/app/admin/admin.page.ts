import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { map, take } from 'rxjs/operators';
import { AddaptPage } from '../addapt/addapt.page';
import { AuthService } from '../service/auth.service';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  userLoged:User;
  constructor(private authSvc: AuthService, private router: Router, private modalctrl: ModalController,) { 
    console.log("usuarioadmin=>",this.authSvc.user$);
    
  }

  onLogout() {
    try {
      this.authSvc.logout();      
      this.router.navigate(['/tabs/tab1']);
      
    } catch (error) {
      console.log('Error->', error);
    }
  }
  async showModal(){
    const modal = await this.modalctrl.create({
      component: AddaptPage
    })
    await modal.present();
  }
  

  ngOnInit() {
   
  }

}
