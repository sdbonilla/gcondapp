import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apartI } from '../shared/apartamento.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudapartamentoService {

  private cruded: AngularFirestoreCollection<apartI>;
  private aptos: Observable<apartI[]>;
  constructor(db: AngularFirestore) {
    this.cruded = db.collection<apartI>('apartamentos');
    this.aptos = this.cruded.snapshotChanges().pipe(
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


  getAptos() {
    return this.aptos;
  }

  getApto(id:string){
    return this.cruded.doc<apartI>(id).valueChanges();
  }


  updateApto(torre:apartI, id:string){
    return this.cruded.doc(id).update(torre);
  }

  addApto(torre:apartI){
    return this.cruded.add(torre);
  }


  removeApto(id:string){
    return this.cruded.doc(id).delete(); 
  }
}
