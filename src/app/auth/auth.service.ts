import { Injectable } from '@angular/core';
import { Auth, NextOrObserver, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, addDoc, Timestamp } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { AuthError } from './auth.error';
import { SpinnerService } from '../spinner/shared/spinner.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get user() {
    return this.auth.currentUser;
  }

  constructor(private auth: Auth,
    private firestore: Firestore,
    private spinnerService: SpinnerService) { }

  async login(username: string, password: string) {
    try {
      this.spinnerService.mostrar();
      await signInWithEmailAndPassword(this.auth, username, password);
      await addDoc(collection(this.firestore, 'logUsuarios'), { usuario: username, fechaInicio: Timestamp.now() });
    } catch (err: any) {
      await addDoc(collection(this.firestore, 'logErrores'), { error: err.toString(), fecha: Timestamp.now() });
      throw new AuthError(err);
    } finally {
      this.spinnerService.ocultar();
    }
  }

  async logout(): Promise<void> {
    try {
      this.spinnerService.mostrar();
      await signOut(this.auth);
    } catch (err: any) {
      await addDoc(collection(this.firestore, 'logErrores'), { error: err.toString(), fecha: Timestamp.now() });
    } finally {
      this.spinnerService.ocultar();
    }
  }

  getActiveUser(func: NextOrObserver<any>) {
    return onAuthStateChanged(this.auth, func);
  }
}
