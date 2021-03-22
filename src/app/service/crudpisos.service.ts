import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { pisoI } from '../shared/pisos.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudpisosService {
  
  private cruded: AngularFirestoreCollection<pisoI>;
  private pisos: Observable<pisoI[]>;
  constructor(db: AngularFirestore) {
    this.cruded = db.collection<pisoI>('pisos');
    this.pisos = this.cruded.snapshotChanges().pipe(
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


  getPisos() {
    return this.pisos;
  }

  getPiso(id:string){
    return this.cruded.doc<pisoI>(id).valueChanges();
  }


  updatePisos(torre:pisoI, id:string){
    return this.cruded.doc(id).update(torre);
  }

  addPisos(pisos:pisoI){
    return this.cruded.add(pisos);
  }


  removePisos(id:string){
    return this.cruded.doc(id).delete(); 
  }
}
