import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, Timestamp, addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc } from '@angular/fire/firestore';
import { SpinnerService } from 'src/app/spinner/shared/spinner.service';
import { Pizza } from './pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private pizzas: CollectionReference<DocumentData>;
  private errores: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore,
    private spinner: SpinnerService) { 
    this.pizzas = collection(this.firestore, 'pizzas');
    this.errores = collection(this.firestore, 'errores');
  }

  async getPizzasAsync() {
    const querySnapshot = await getDocs(query(this.pizzas));
    const result: Pizza[] = [];

    querySnapshot.forEach(document => {
      const data = document.data();
      
      const repartidor = new Pizza(
        document.id, 
        data['ingredientes'], 
        data['precio'], 
        data['peso']);

      result.push(repartidor);
    });

    return result;
  }

  async altaPizzaAsync(objeto: Pizza) {
    try {
      this.spinner.mostrar();

      await setDoc(doc(this.firestore, 'pizzas', objeto.nombre), {
        ingredientes: objeto.ingredientes,
        precio: objeto.precio,
        peso: objeto.peso
      });

    } catch (err: any) {
      await addDoc(this.errores, { error: err.toString(), fecha: Timestamp.now() });
      throw err;
    } finally {
      this.spinner.ocultar();
    }
  }

  async bajaPizzaAsync(objeto: Pizza) {
    try {
      this.spinner.mostrar();

      const ref = doc(this.firestore, 'pizzas', objeto.nombre);

      await deleteDoc(ref);

    } catch (err: any) {
      await addDoc(this.errores, { error: err.toString(), fecha: Timestamp.now() });
      throw err;
    } finally {
      this.spinner.ocultar();
    }
  }

  async modificarPizzaAsync(objeto: Pizza) {
    try {
      this.spinner.mostrar();
      const ref = doc(this.firestore, 'pizzas', objeto.nombre);

      await updateDoc(ref, {
        ingredientes: objeto.ingredientes,
        precio: objeto.precio,
        peso: objeto.peso
      });

    } catch (err: any) {
      await addDoc(this.errores, { error: err.toString(), fecha: Timestamp.now() });
      throw err;
    } finally {
      this.spinner.ocultar();
    }
  }
}
