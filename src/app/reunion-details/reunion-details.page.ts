import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { CrudreunionService } from '../service/crudreunion.service';
import { reunI } from '../shared/reunion.interface';

@Component({
  selector: 'app-reunion-details',
  templateUrl: './reunion-details.page.html',
  styleUrls: ['./reunion-details.page.scss'],
})
export class ReunionDetailsPage implements OnInit {

  reuni: reunI ={
    
    asunto: '',
    lugar: '',
    fecha: new Date()
  }
  reunId= null;
  constructor(private route: ActivatedRoute, private nav: NavController, private reuniService: CrudreunionService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.reunId = this.route.snapshot.params['id'];
    if (this.reunId){
      this.loadTodo();
    }
  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.reuniService.getReunion(this.reunId).subscribe(todo => {
      loading.dismiss();;
      this.reuni = todo;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();
 
    if (this.reunId) {
      this.reuniService.updateReuniones(this.reuni, this.reunId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    } else {
      this.reuniService.addReuniones(this.reuni).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }
  }
  async onRemoveTodo(idTodo:string) {
    this.reuniService.removeReuniones(idTodo);
  }

}
