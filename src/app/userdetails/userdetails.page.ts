import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { CruduserService } from '../service/cruduser.service';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
})
export class UserdetailsPage implements OnInit {

  datauser: User ={
    
    uid: '',
    displayName: '',
    email: '',
    emailVerified: true

  }
  userId= null;
  constructor(private route: ActivatedRoute, private nav: NavController, private userService: CruduserService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    if (this.userId){
      this.loadDataUser();
    }
  }

  async loadDataUser(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.userService.getUser(this.userId).subscribe(todo => {
      loading.dismiss();
      this.datauser = todo;
    });
  }

  async saveUserData() {
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();
 
    if (this.userId) {
      this.userService.updateUser(this.datauser, this.userId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    } else {
      this.userService.addUser(this.datauser).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }
  }
 

}
