import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, Timestamp, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
import { Repartidor } from './repartidor.model';
import { SpinnerService } from '../../spinner/shared/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  private repartidores: CollectionReference<DocumentData>;
  private errores: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore,
    private spinner: SpinnerService) { 
    this.repartidores = collection(this.firestore, 'repartidores');
    this.errores = collection(this.firestore, 'errores');
  }

  async getRepartidoresAsync() {
    const querySnapshot = await getDocs(query(this.repartidores));
    const result: Repartidor[] = [];

    querySnapshot.forEach(document => {
      const data = document.data();
      
      const repartidor = new Repartidor(
        data['dni'], 
        data['nombre'], 
        data['apellido'], 
        data['edad'], 
        data['nacionalidad'], 
        data['capacidad'], 
        data['unidadPropia']);

      result.push(repartidor);
    });

    return result;
  }

  async altaRepartidorAsync(objeto: Repartidor) {
    try {
      this.spinner.mostrar();

      const docRef = await addDoc(this.repartidores, {
        dni: objeto.dni,
        nombre: objeto.nombre,
        apellido: objeto.apellido,
        edad: objeto.edad,
        nacionalidad: objeto.nacionalidad,
        capacidad: objeto.capacidad,
        unidadPropia: objeto.unidadPropia
      });

      return docRef.id;

    } catch (err: any) {
      await addDoc(this.errores, { error: err.toString(), fecha: Timestamp.now() });
      throw err;
    } finally {
      this.spinner.ocultar();
    }
  }
}
