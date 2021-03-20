import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EdificeI } from '../shared/edifice.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudedificeService {
  private cruded: AngularFirestoreCollection<EdificeI>;
  private torres: Observable<EdificeI[]>;
  constructor(db: AngularFirestore) {
    this.cruded = db.collection<EdificeI>('condominio');
    this.torres = this.cruded.snapshotChanges().pipe(
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


  getTorres() {
    return this.torres;
  }

  getTorre(id:string){
    return this.cruded.doc<EdificeI>(id).valueChanges();
  }


  updateTorre(torre:EdificeI, id:string){
    return this.cruded.doc(id).update(torre);
  }

  addTorre(torre:EdificeI){
    return this.cruded.add(torre);
  }


  removeTorre(id:string){
    return this.cruded.doc(id).delete(); 
  }
}
