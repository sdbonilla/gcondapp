import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { reservI } from '../shared/reserva.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudreservaService {
  private cruded: AngularFirestoreCollection<reservI>;
  private reserva: Observable<reservI[]>;
  constructor(db: AngularFirestore) {
    this.cruded = db.collection<reservI>('reservas');
    this.reserva = this.cruded.snapshotChanges().pipe(
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


  getReservas() {
    return this.reserva;
  }

  getReserva(id:string){
    return this.cruded.doc<reservI>(id).valueChanges();
  }


  updateReservas(reserva:reservI, id:string){
    return this.cruded.doc(id).update(reserva);
  }

  addReservas(reserva:reservI){
    return this.cruded.add(reserva);
  }


  removeReservas(id:string){
    return this.cruded.doc(id).delete(); 
  }
}
