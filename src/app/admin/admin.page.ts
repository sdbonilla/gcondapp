import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  onLogout() {
    try {
      this.authSvc.logout();
      this.router.navigate(['/tabs/tab1']);
      
    } catch (error) {
      console.log('Error->', error);
    }
  }
  ngOnInit() {
  }

}
