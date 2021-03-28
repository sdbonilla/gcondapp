import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { CruduserService } from '../service/cruduser.service';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  duser$: Observable<User> = this.authSvc.afAuth.user;
  user: User[];
  constructor(private userSvc: CruduserService, private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
    this.userSvc.getUsers().subscribe(res=>this.user = res);
  }

  onLogout() {
    try {
      this.authSvc.logout();      
      this.router.navigate(['/tabs/tab1']);
      
    } catch (error) {
      console.log('Error->', error);
    }
  }
}
