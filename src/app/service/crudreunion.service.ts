import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { reunI } from '../shared/reunion.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudreunionService {

  private cruded: AngularFirestoreCollection<reunI>;
  private reunion: Observable<reunI[]>;
  constructor(db: AngularFirestore) {
    this.cruded = db.collection<reunI>('reuniones');
    this.reunion = this.cruded.snapshotChanges().pipe(
      map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }
      )
    );
  }


  getReuniones() {
    return this.reunion;
  }

  getReunion(id:string){
    return this.cruded.doc<reunI>(id).valueChanges();
  }


  updateReuniones(reunion:reunI, id:string){
    return this.cruded.doc(id).update(reunion);
  }

  addReuniones(reunion:reunI){
    return this.cruded.add(reunion);
  }


  removeReuniones(id:string){
    return this.cruded.doc(id).delete(); 
  }
}
