import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CruduserService {
  private cruduser: AngularFirestoreCollection<User>;
  private usuario: Observable<User[]>;
  constructor(db: AngularFirestore) {
    this.cruduser = db.collection<User>('users');
    this.usuario = this.cruduser.snapshotChanges().pipe(
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


  getUsers() {
    return this.usuario;
  }

  getUser(id:string){
    return this.cruduser.doc<User>(id).valueChanges();
  }


  updateUser(us:User, id:string){
    return this.cruduser.doc(id).update(us);
  }

  addUser(pisos:User){
    return this.cruduser.add(pisos);
  }
}
